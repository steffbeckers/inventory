using Inventory.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Inventory.Domain.Entities
{
    public class Item : AuditableEntity
    {
        public Item()
        {
            Images = new List<ImageItem>();
            Translations = new List<ItemTranslation>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public double? PurchasePrice { get; set; }
        public DateTime? ExpirationDate { get; set; }

        public ItemType ItemType { get; set; }

        public ICollection<ImageItem> Images { get; set; }
        public ICollection<ItemTranslation> Translations { get; set; }
    }
}
