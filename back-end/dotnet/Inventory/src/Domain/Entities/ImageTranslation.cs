using System;

namespace Inventory.Domain.Entities
{
    public class ImageTranslation
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string URL { get; set; }

        public Guid ImageId { get; set; }
        public Image Image { get; set; }

        public Guid LanguageId { get; set; }
        public Language Language { get; set; }
    }
}