using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using GoodReadsProject.Services.GoodReadsProjectEF.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectCore.Interfaces
{
    public interface IRepositoryRating : IRepository<BookRating>
    {
    }
}
