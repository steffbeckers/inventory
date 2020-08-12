using System;
using System.Collections.Generic;
using System.Text;

namespace Inventory.Domain.Entities
{
    public class ImageItem
    {
        public Guid ImageId { get; set; }
        public Image Image { get; set; }

        public Guid ItemId { get; set; }
        public Item Item { get; set; }

        public bool IsPrimary { get; set; }
        public int? SortOrder { get; set; }
    }
}
