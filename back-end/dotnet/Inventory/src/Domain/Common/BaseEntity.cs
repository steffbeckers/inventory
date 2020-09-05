using System;
using System.Collections.Generic;
using System.Text;

namespace Inventory.Domain.Common
{
    public abstract class BaseEntity<TKey>
    {
        public TKey Id { get; set; }

        public string CreatedBy { get; set; }
        public DateTime Created { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime? LastModified { get; set; }

        public List<BaseDomainEvent> Events = new List<BaseDomainEvent>();
    }
}
