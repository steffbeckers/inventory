using Inventory.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Inventory.Infrastructure.Persistence.Configurations
{
    public class RelatedItemConfiguration : IEntityTypeConfiguration<RelatedItem>
    {
        public void Configure(EntityTypeBuilder<RelatedItem> builder)
        {
            builder.HasOne(t => t.Item)
                .WithMany()
                .HasForeignKey(t => t.ItemId)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
