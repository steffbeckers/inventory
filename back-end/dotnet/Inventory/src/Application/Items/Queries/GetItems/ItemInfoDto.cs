using Inventory.Application.Common.Mappings;
using Inventory.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Inventory.Application.Items.Queries.GetItems
{
    public class ItemInfoDto : IMapFrom<ItemInfo>
    {
        public Guid Id { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public double? PurchasePrice { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public DateTime? LastUsed { get; set; }
    }
}
