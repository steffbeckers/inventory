using Inventory.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Inventory.Infrastructure.Persistence.Configurations
{
    public class ItemConfiguration : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder.Property(t => t.Name)
                .HasMaxLength(200)
                .IsRequired();

            builder.Property(t => t.Description)
                .HasMaxLength(500);

            builder.HasMany(t => t.RelatedItems)
                .WithOne(t => t.Related)
                .HasForeignKey(t => t.RelatedId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
