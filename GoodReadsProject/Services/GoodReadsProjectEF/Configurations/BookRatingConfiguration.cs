using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GoodReadsProject.Services.GoodReadsProjectEF
{
    internal class BookRatingConfiguration : IEntityTypeConfiguration<BookRating>
    {
        public void Configure(EntityTypeBuilder<BookRating> bookRating)
        {
            bookRating.HasKey(x => x.RatingId);
            bookRating.HasOne(x => x.Book).WithMany(b => b.Ratings).HasForeignKey(f => f.BookId);
            bookRating.HasOne(x => x.User).WithMany(b => b.Ratings).HasForeignKey(f => f.UserId);

        }
    }
}