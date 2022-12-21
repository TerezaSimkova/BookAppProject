using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectEF.Repositories
{
    public class BookRepository : IRepositoryBook
    {
        private readonly BooksContext bcontx;

        public BookRepository(BooksContext bcontx)
        {
            this.bcontx = bcontx;
        }

        public bool Add(Book item)
        {
            if (item == null)
            {
                return false;
            }
          
            bcontx.Book.Add(item);
            bcontx.SaveChanges();
            return true;
        }

        public bool Delete(Book item)
        {
            if(item == null)
            {
                return false;
            }
            bcontx.Book.Remove(item);
            bcontx.SaveChanges();
            return true;
        }

        public async Task<List<Book>> GetAllAsync()
        {
            //return bcontx.Book.AsNoTracking().Include(x => x.Ratings).ToList();
            var books = await bcontx.Book.Select(b => new Book
            {
                BookId = b.BookId,
                Price = b.Price,
                NumberOfPages = b.NumberOfPages,
                BookName = b.BookName,
                Author = b.Author,
                BookDescription = b.BookDescription,
                Ratings = b.Ratings.Select(r =>
                new BookRating
                {
                    RatingId = r.RatingId,
                    Title = r.Title,
                    Description = r.Description,
                    CountStars = r.CountStars,
                    BookId = r.BookId,
                    User = new User
                    {
                        Name = r.User.Name,
                        Surname = r.User.Surname,
                    }
                }).ToList()

            }).ToListAsync();
            return books;
        }

        public Book GetById(int bookId)
        {          
           var book = bcontx.Book.Single(x => x.BookId == bookId);
            return book;
        }

        public bool Update(Book item)
        {
            var bookExist = bcontx.Book.First(x => x.BookId == item.BookId);
            if (bookExist == null)
            {
                return false;
            }
            bookExist.BookCode = item.BookCode;
            bookExist.BookDescription = item.BookDescription;
            bookExist.BookName = item.BookName;
            bookExist.Author = item.Author;
            bookExist.Genr = item.Genr;
            bookExist.NumberOfPages = item.NumberOfPages;
            bookExist.Price = item.Price;
            //bookExist.RatingId = item.RatingId;

            bcontx.SaveChanges();
            return true;
        }

        public List<Book> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
