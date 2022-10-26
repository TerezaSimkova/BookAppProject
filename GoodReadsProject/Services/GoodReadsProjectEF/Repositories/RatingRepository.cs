using GoodReadsProject.Services.GoodReadsProjectCore.Interfaces;
using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectEF.Repositories
{
    public class RatingRepository : IRepositoryRating
    {
        private readonly BooksContext bcontx;

        public RatingRepository(BooksContext bcontx)
        {
            this.bcontx = bcontx;
        }
        public bool Add(BookRating item)
        {
            if (item == null)
            {
                return false;
            }
            bcontx.BookRating.Add(item);
            bcontx.SaveChanges();
            return true;
        }

        public bool Delete(BookRating item)
        {
            if (item == null)
            {
                return false;
            }
            bcontx.BookRating.Remove(item);
            bcontx.SaveChanges();
            return true;
        }

        public List<BookRating> GetAll()
        {
            return bcontx.BookRating.ToList();
        }

        public BookRating GetById(int id)
        {
            var rating = bcontx.BookRating.Single(x => x.RatingId == id);
            return rating;
        }

        public bool Update(BookRating item)
        {
            var rating = bcontx.BookRating.First(x => x.RatingId == item.RatingId);
            if (rating == null)
            {
                return false;
            }
            rating.Title = item.Title;
            rating.Description = item.Description;
            rating.CountStars = item.CountStars;     
            bcontx.SaveChanges();
            return true;
        }
    }
}
