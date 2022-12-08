using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectEF.Repositories
{
    public interface IRepositoryUser : IRepository<User>
    {
        public User GetByEmailAndPass(string userPassword, string userEmail);
    }
}
