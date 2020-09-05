using Inventory.Domain.Common;
using Inventory.Domain.Events;
using System;
using System.Collections.Generic;

namespace Inventory.Domain.Entities
{
    public class Item : BaseEntity<Guid>
    {
        public Item()
        {
            Infos = new List<ItemInfo>();
            Images = new List<ImageItem>();
            RelatedItems = new List<RelatedItem>();
            Translations = new List<ItemTranslation>();

            Events.Add(new ItemCreatedEvent(this));
        }

        public string Name { get; set; }
        public string Description { get; set; }

        public Guid ItemTypeId { get; set; }
        public ItemType ItemType { get; set; }

        public ICollection<ItemInfo> Infos { get; set; }
        public ICollection<ImageItem> Images { get; set; }
        public ICollection<RelatedItem> RelatedItems { get; set; }
        public ICollection<ItemTranslation> Translations { get; set; }
    }
}
