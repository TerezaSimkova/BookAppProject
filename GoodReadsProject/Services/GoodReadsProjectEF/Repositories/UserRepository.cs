using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectEF.Repositories
{
    public class UserRepository : IRepositoryUser
    {
        private readonly BooksContext bcontx;

        public UserRepository(BooksContext bcontx)
        {
            this.bcontx = bcontx;
        }

        public bool Add(User item)
        {
            if(item == null)
            {
                return false;
            }
            bcontx.User.Add(item);
            bcontx.SaveChanges();
            return true;

        }

        public bool Delete(User item)
        {
            if (item == null)
            {
                return false;
            }
            bcontx.User.Remove(item);
            bcontx.SaveChanges();
            return true;
        }

        public List<User> GetAll()
        {
            return bcontx.User.ToList();
        }

        public User GetById(int id)
        {
            var user = bcontx.User.Single(x => x.UserId == id);
            return user;
        }

        public bool Update(User item)
        {
            var user = bcontx.User.First(x => x.UserId == item.UserId);
            if (user == null)
            {
                return false;
            }
            user.Address = item.Address;
            user.Age = item.Age;
            user.DateOfBirth = item.DateOfBirth;
            user.EmailAddress = item.EmailAddress;
            user.Name = item.Name;
            user.Surname = item.Surname;
            user.PersonalDescription = item.PersonalDescription;
            user.userLevel = item.userLevel;
            user.userType = item.userType;
            bcontx.SaveChanges();
            return true;
        }
    }
}
