using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectEF
{
    public class BooksContext :DbContext
    {
        public DbSet<User> User { get; set; }
        public DbSet<Book> Book { get; set; }
        public DbSet<UserBook> UserBook { get; set; }
        public DbSet<BookRating> BookRating { get; set; }
        public BooksContext()
        {

        }

        public BooksContext(DbContextOptions<BooksContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
                optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;
		    Database=GoodReadsDatabase;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration<User>(new UserConfiguration());
            modelBuilder.ApplyConfiguration<Book>(new BookConfiguration());
            modelBuilder.ApplyConfiguration<UserBook>(new UserBookConfiguration());
            modelBuilder.ApplyConfiguration<BookRating>(new BookRatingConfiguration());
        }
    }
}
