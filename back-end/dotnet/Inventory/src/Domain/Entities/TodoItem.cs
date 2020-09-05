using Inventory.Domain.Common;
using Inventory.Domain.Enums;
using System;

namespace Inventory.Domain.Entities
{
    public class TodoItem : BaseEntity<int>
    {
        public string Title { get; set; }
        public string Note { get; set; }
        public bool Done { get; set; }
        public DateTime? Reminder { get; set; }
        public PriorityLevel Priority { get; set; }

        public int ListId { get; set; }
        public TodoList List { get; set; }
    }
}
