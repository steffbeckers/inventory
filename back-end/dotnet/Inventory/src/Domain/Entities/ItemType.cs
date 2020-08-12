using System;
using System.Collections.Generic;

namespace Inventory.Domain.Entities
{
    public class ItemType
    {
        public ItemType()
        {
            this.Items = new List<Item>();
            this.Translations = new List<ItemTypeTranslation>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Item> Items { get; private set; }
        public ICollection<ItemTypeTranslation> Translations { get; private set; }
    }
}