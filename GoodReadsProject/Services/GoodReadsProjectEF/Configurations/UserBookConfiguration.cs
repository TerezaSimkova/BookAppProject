using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GoodReadsProject.Services.GoodReadsProjectEF
{
    internal class UserBookConfiguration : IEntityTypeConfiguration<UserBook>
    {
        public void Configure(EntityTypeBuilder<UserBook> userBook)
        {
            userBook.HasOne(x => x.Book).WithMany(b => b.UserBooks).HasForeignKey(f => f.BookId);
            userBook.HasOne(x => x.User).WithMany(b => b.UserBooks).HasForeignKey(f => f.UserId);

            userBook.HasKey(x => new { x.BookId, x.UserId });
        }
    }
}