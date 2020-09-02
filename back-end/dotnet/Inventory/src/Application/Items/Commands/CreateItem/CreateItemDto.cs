using System;
using System.Collections.Generic;
using System.Text;

namespace Inventory.Application.Items.Commands.CreateItem
{
    public class CreateItemDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public Guid ItemTypeId { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public double? PurchasePrice { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public DateTime? LastUsed { get; set; }
    }
}
