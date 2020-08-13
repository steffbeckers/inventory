using System;

namespace Inventory.Domain.Entities
{
    public class ItemTranslation
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Guid ItemId { get; set; }
        public Item Item { get; set; }

        public Guid LanguageId { get; set; }
        public Language Language { get; set; }
    }
}
