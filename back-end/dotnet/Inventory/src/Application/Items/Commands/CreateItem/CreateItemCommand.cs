using Inventory.Application.Common.Interfaces;
using Inventory.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Inventory.Application.Items.Commands.CreateItem
{
    public class CreateItemCommand : IRequest<Guid>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public double? PurchasePrice { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public DateTime? LastUsed { get; set; }
        
        public Guid? ItemTypeId { get; set; }
    }

    public class CreateItemCommandHandler : IRequestHandler<CreateItemCommand, Guid>
    {
        private readonly IApplicationDbContext _context;

        public CreateItemCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Guid> Handle(CreateItemCommand request, CancellationToken cancellationToken)
        {
            Item item = new Item() {
                Name = request.Name,
                Description = request.Description,
                ItemTypeId = request.ItemTypeId,
                Infos = new List<ItemInfo>()
                {
                    new ItemInfo()
                    {
                        PurchaseDate = request.PurchaseDate,
                        PurchasePrice = request.PurchasePrice,
                        ExpirationDate = request.ExpirationDate,
                        LastUsed = request.LastUsed
                    }
                }
            };

            _context.Items.Add(item);

            await _context.SaveChangesAsync(cancellationToken);

            return item.Id;
        }
    }
}
