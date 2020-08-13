using Inventory.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Inventory.Infrastructure.Persistence.Configurations
{
    public class ImageItemConfiguration : IEntityTypeConfiguration<ImageItem>
    {
        public void Configure(EntityTypeBuilder<ImageItem> builder)
        {
            builder.HasKey(new string[] { "ImageId", "ItemId" });
        }
    }
}
