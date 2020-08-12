using System;
using System.Collections.Generic;

namespace Inventory.Domain.Entities
{
    public class ItemTypeTranslation
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Guid ItemTypeId { get; set; }
        public ItemType ItemType { get; set; }

        public Guid LanguageId { get; set; }
        public Language Language { get; set; }
    }
}