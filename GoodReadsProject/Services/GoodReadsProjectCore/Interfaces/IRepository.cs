using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectEF.Repositories
{
    public interface IRepository<T>
    {
        public List<T> GetAll();
        public bool Add(T item);
        public bool Update(T item);
        public bool Delete(T item);
        public T GetById(int id);
    }

}
