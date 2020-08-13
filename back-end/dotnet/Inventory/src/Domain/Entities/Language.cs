using System;

namespace Inventory.Domain.Entities
{
    public class Language
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string NativeName { get; set; }
        public string Description { get; set; }
        public string Code { get; set; }
    }
}