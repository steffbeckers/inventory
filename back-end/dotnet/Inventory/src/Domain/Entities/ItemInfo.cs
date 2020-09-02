using Inventory.Domain.Common;
using System;
using System.Collections.Generic;

namespace Inventory.Domain.Entities
{
    public class ItemInfo : AuditableEntity
    {
        public Guid Id { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public double? PurchasePrice { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public DateTime? LastUsed { get; set; }

        public Guid ItemId { get; set; }
        public Item Item { get; set; }
    }
}
