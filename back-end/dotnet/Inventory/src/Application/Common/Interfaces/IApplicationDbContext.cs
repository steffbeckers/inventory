using Inventory.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Inventory.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Item> Items { get; set; }

        DbSet<TodoList> TodoLists { get; set; }

        DbSet<TodoItem> TodoItems { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
