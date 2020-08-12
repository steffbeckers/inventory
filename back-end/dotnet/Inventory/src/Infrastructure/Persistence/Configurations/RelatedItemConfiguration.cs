using Inventory.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Inventory.Infrastructure.Persistence.Configurations
{
    public class RelatedItemConfiguration : IEntityTypeConfiguration<RelatedItem>
    {
        public void Configure(EntityTypeBuilder<RelatedItem> builder)
        {
            //builder.HasOne(t => t.Item)
            //    .WithMany(t => t.RelatedItems)
            //    .HasForeignKey(t => t.ItemId)
            //    .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(t => t.Related)
                .WithMany(t => t.RelatedItems)
                .HasForeignKey(t => t.RelatedId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
