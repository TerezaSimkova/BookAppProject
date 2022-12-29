using GoodReadsProject.AppHelper.Models;
using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.AppHelper.Helper
{
    public static class Mapping
    {
        //User
        public static UserViewModel ToUserViewModel(this User user)
        {
            return new UserViewModel
            {
                Name = user.Name,
                Surname = user.Surname,
                UserName = user.UserName,
                Address = user.Address,
                EmailAddress = user.EmailAddress,
                Password = user.Password,
                DateOfBirth = user.DateOfBirth,
                PersonalDescription = user.PersonalDescription,
                userRole = (UserViewModel.Role?)User.Role.SignedInUser,
                ReturnUrl = user.ReturnUrl
            };
        }
        public static User ToUser(this UserViewModel userViewModel)
        {
            return new User
            {
                Name = userViewModel.Name,
                Surname = userViewModel.Surname,
                UserName = userViewModel.UserName,
                Address = userViewModel.Address,
                EmailAddress = userViewModel.EmailAddress,
                Password = userViewModel.Password,
                DateOfBirth = userViewModel.DateOfBirth,
                PersonalDescription = userViewModel.PersonalDescription,
                userRole = User.Role.SignedInUser,
                ReturnUrl = userViewModel.ReturnUrl
            };
        }
        //Book
        public static BookViewModel ToBookViewModel(this Book book)
        {
            return new BookViewModel
            {
                BookCode = book.BookCode,
                BookName = book.BookName,
                BookDescription = book.BookDescription,
                Author = book.Author,
                NumberOfPages = book.NumberOfPages,
                Price = book.Price,
                Genr = (BookViewModel.BookGenr)book.Genr
            };
        }
        public static Book ToBook(this BookViewModel bookViewModel)
        {
            return new Book
            {
                BookCode = bookViewModel.BookCode,
                BookName = bookViewModel.BookName,
                BookDescription = bookViewModel.BookDescription,
                Author = bookViewModel.Author,
                NumberOfPages = bookViewModel.NumberOfPages,
                Price = bookViewModel.Price,
                Genr = (Book.BookGenr)bookViewModel.Genr
            };
        }
    }
}
