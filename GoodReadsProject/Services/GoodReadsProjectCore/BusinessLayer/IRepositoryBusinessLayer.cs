using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectCore.BusinessLayer
{
    public interface IRepositoryBusinessLayer
    {
        //User
        public List<User> FetchAllUsers();
        User GetUserById(int id);
        public bool CreateUser(User user);
        public bool EditUser(User user);
        public bool DeleteUser(int id);

        //Rating
        public List<BookRating> FetchAllRatings();
        public BookRating GetRatingById(int id);
        public bool CreateRating(BookRating rating);
        public bool EditRating(BookRating rating);
        public bool DeleteRating(int id);

        //Book
        public List<Book> FetchAllBooks();
        public Book GetBookById(int id);
        public bool CreateBook(Book book);
        public bool EditBook(Book book);
        public bool DeleteBook(int id);
    }
}
