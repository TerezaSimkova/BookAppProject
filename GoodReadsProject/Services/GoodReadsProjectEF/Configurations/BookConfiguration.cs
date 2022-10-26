using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GoodReadsProject.Services.GoodReadsProjectEF
{
    internal class BookConfiguration : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> book)
        {
            book.HasKey(b => b.BookId);

            book.HasMany(x => x.UserBooks).WithOne(u => u.Book).HasForeignKey(f => f.BookId);
        }
    }
}