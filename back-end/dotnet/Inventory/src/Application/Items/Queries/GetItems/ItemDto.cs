﻿using Inventory.Application.Common.Mappings;
using Inventory.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Inventory.Application.Items.Queries.GetItems
{
    public class ItemDto : IMapFrom<Item>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<ItemInfoDto> Infos { get; set; }
    }
}
