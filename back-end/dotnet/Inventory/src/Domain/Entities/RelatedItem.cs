using System;
using System.Collections.Generic;
using System.Text;

namespace Inventory.Domain.Entities
{
    public class RelatedItem
    {
        public Guid Id { get; set; }

        public Guid ItemId { get; set; }
        public Item Item { get; set; }

        public Guid RelatedId { get; set; }
        public Item Related { get; set; }
    }
}
