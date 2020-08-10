using Inventory.Application.Common.Mappings;
using Inventory.Domain.Entities;

namespace Inventory.Application.TodoLists.Queries.ExportTodos
{
    public class TodoItemRecord : IMapFrom<TodoItem>
    {
        public string Title { get; set; }

        public bool Done { get; set; }
    }
}
