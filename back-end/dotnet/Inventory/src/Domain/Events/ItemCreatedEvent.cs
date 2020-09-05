using Inventory.Domain.Common;
using Inventory.Domain.Entities;

namespace Inventory.Domain.Events
{
    public class ItemCreatedEvent : BaseDomainEvent
    {
        public Item Item { get; set; }
        
        public ItemCreatedEvent(Item item)
        {
            Item = item;
        }
    }
}
