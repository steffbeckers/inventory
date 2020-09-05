using Inventory.Domain.Common;
using System.Collections.Generic;

namespace Inventory.Domain.Entities
{
    public class TodoList : BaseEntity<int>
    {
        public TodoList()
        {
            Items = new List<TodoItem>();
        }

        public string Title { get; set; }
        public string Colour { get; set; }

        public IList<TodoItem> Items { get; set; }
    }
}
