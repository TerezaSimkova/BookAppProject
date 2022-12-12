using GoodReadsProject.Services.GoodReadsProjectCore.Interfaces;
using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using GoodReadsProject.Services.GoodReadsProjectEF.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectCore.BusinessLayer
{
    public class BusinessLayer : IRepositoryBusinessLayer
    {
        private readonly IRepositoryUser repositoryUser;
        private readonly IRepositoryBook repositoryBook;
        private readonly IRepositoryRating repositoryRating;
        public BusinessLayer(IRepositoryUser repositoryUsers, IRepositoryBook repositoryBooks, IRepositoryRating repositoryRatings)
        {
            repositoryUser = repositoryUsers;
            repositoryBook = repositoryBooks;
            repositoryRating = repositoryRatings;
        }

        #region Books
        public async Task<List<Book>> FetchAllBooks()
        {
            var books = await repositoryBook.GetAllAsync();
            return books;
        }

        public bool CreateBook(Book newBook)
        {
            return repositoryBook.Add(newBook);
        }
        public bool EditBook(Book editedCustomer)
        {
            return repositoryBook.Update(editedCustomer);
        }

        public bool DeleteBook(int id)
        {
            var bookToDelete = GetBookById(id);
            return repositoryBook.Delete(bookToDelete);
        }

        public Book GetBookById(int id)
        {
            throw new Exception();
            //var book = FetchAllBooks().Single(x => x.BookId == id);
            //return repositoryBook.GetById(book.BookId);
        }
        #endregion
        #region User
        public List<User> FetchAllUsers()
        {
            return repositoryUser.GetAll();
        }

        public bool CreateUser(User newUser)
        {
            return repositoryUser.Add(newUser);
        }
        public bool EditUser(User editedUser)
        {
            return repositoryUser.Update(editedUser);
        }
        public bool DeleteUser(int id)
        {
            var userToDelete = GetUserById(id);
            return repositoryUser.Delete(userToDelete);
        }

        public User GetUserById(int id)
        {
            var user = FetchAllUsers().Single(x => x.UserId == id);
            return repositoryUser.GetById(user.UserId);
        }
        #endregion
        #region Rating
        public List<BookRating> FetchAllRatings()
        {
            return repositoryRating.GetAll();
        }

        public bool CreateRating(BookRating newRating)
        {
            return repositoryRating.Add(newRating);
        }
        public bool EditRating(BookRating newRating)
        {
            return repositoryRating.Update(newRating);
        }
        public bool DeleteRating(int id)
        {
            var ratingToDelete = GetRatingById(id);
            return repositoryRating.Delete(ratingToDelete);
        }

        public BookRating GetRatingById(int id)
        {
            var rating = FetchAllRatings().Single(x => x.RatingId == id);
            return repositoryRating.GetById(rating.RatingId);
        }

        public User GetUserByMailAndPassword(string userPassword, string userEmail)
        {
            return repositoryUser.GetByEmailAndPass(userPassword, userEmail);
        }
        #endregion
    }
}
