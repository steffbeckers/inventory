using Inventory.Domain.Common;
using System;
using System.Collections.Generic;

namespace Inventory.Domain.Entities
{
    public class Image : AuditableEntity
    {
        public Image()
        {
            Items = new List<ImageItem>();
            Translations = new List<ImageTranslation>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string URL { get; set; }

        public ICollection<ImageItem> Items { get; set; }
        public ICollection<ImageTranslation> Translations { get; set; }
    }
}
