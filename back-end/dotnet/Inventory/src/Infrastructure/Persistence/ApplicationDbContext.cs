using IdentityServer4.EntityFramework.Options;
using Inventory.Application.Common.Interfaces;
using Inventory.Domain.Common;
using Inventory.Domain.Entities;
using Inventory.Infrastructure.Identity;
using MediatR;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Options;
using System;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace Inventory.Infrastructure.Persistence
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>, IApplicationDbContext
    {
        private readonly IMediator _mediator;
        private readonly ICurrentUserService _currentUserService;
        private readonly IDateTime _dateTime;
        private IDbContextTransaction _currentTransaction;

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions,
            IMediator mediator,
            ICurrentUserService currentUserService,
            IDateTime dateTime
        ) : base(options, operationalStoreOptions)
        {
            _mediator = mediator;
            _currentUserService = currentUserService;
            _dateTime = dateTime;
        }

        public DbSet<Image> Image { get; set; }
        public DbSet<ImageItem> ImageItem { get; set; }
        public DbSet<ImageTranslation> ImageTranslations { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<ItemTranslation> ItemTranslations { get; set; }
        public DbSet<ItemInfo> ItemInfos { get; set; }
        public DbSet<ItemType> ItemTypes { get; set; }
        public DbSet<ItemTypeTranslation> ItemTypeTranslations { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<RelatedItem> RelatedItems { get; set; }

        public DbSet<TodoItem> TodoItems { get; set; }
        public DbSet<TodoList> TodoLists { get; set; }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            // Update audit fields of entity
            foreach (var entry in ChangeTracker.Entries<BaseEntity<Guid>>())
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.CreatedBy = _currentUserService.UserId;
                        entry.Entity.Created = _dateTime.Now;
                        break;
                    case EntityState.Modified:
                        entry.Entity.LastModifiedBy = _currentUserService.UserId;
                        entry.Entity.LastModified = _dateTime.Now;
                        break;
                }
            }

            // Save to database
            int result = await base.SaveChangesAsync(cancellationToken);

            // Events

            // Ignore events if no dispatcher provided
            if (_mediator == null) return result;

            // Dispatch events only if save was successful
            var entitiesWithEvents = ChangeTracker.Entries<BaseEntity<Guid>>()
                .Select(e => e.Entity)
                .Where(e => e.Events.Any())
                .ToArray();

            foreach (var entity in entitiesWithEvents)
            {
                var events = entity.Events.ToArray();
                entity.Events.Clear();

                foreach (var domainEvent in events)
                {
                    await _mediator.Publish(domainEvent).ConfigureAwait(false);
                }
            }

            return result;
        }

        public async Task BeginTransactionAsync()
        {
            if (_currentTransaction != null)
            {
                return;
            }

            _currentTransaction = await base.Database.BeginTransactionAsync(IsolationLevel.ReadCommitted).ConfigureAwait(false);
        }

        public async Task CommitTransactionAsync()
        {
            try
            {
                await SaveChangesAsync().ConfigureAwait(false);

                _currentTransaction?.Commit();
            }
            catch
            {
                RollbackTransaction();
                throw;
            }
            finally
            {
                if (_currentTransaction != null)
                {
                    _currentTransaction.Dispose();
                    _currentTransaction = null;
                }
            }
        }

        public void RollbackTransaction()
        {
            try
            {
                _currentTransaction?.Rollback();
            }
            finally
            {
                if (_currentTransaction != null)
                {
                    _currentTransaction.Dispose();
                    _currentTransaction = null;
                }
            }
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(builder);
        }
    }
}
