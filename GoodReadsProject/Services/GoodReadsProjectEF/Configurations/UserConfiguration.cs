using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GoodReadsProject.Services.GoodReadsProjectEF
{
    internal class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> user)
        {
            user.HasKey(u => u.UserId);
            user.Property(u => u.Name).IsRequired();
            user.Property(u => u.Surname).IsRequired();
            user.Property(u => u.Address).IsRequired();
            user.Property(u => u.EmailAddress).IsRequired();
            user.Property(u => u.DateOfBirth).IsRequired();

            user.HasMany(x => x.UserBooks).WithOne(u => u.User).HasForeignKey(f => f.UserId);
            user.HasMany(x => x.Ratings).WithOne(u => u.User).HasForeignKey(f => f.UserId);

            user.HasIndex(e => e.EmailAddress).IsUnique();
        }
    }
}