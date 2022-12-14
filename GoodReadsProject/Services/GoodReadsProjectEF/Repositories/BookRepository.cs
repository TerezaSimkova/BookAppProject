using GoodReadsProject.Services.GoodReadsProjectCore.Models;
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

        public List<Book> GetAll()
        {
            return bcontx.Book.ToList();
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
            bookExist.RatingId = item.RatingId;

            bcontx.SaveChanges();
            return true;
        }
    }
}
