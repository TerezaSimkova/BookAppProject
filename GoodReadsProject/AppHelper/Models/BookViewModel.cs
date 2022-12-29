using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.AppHelper.Models
{
    public class BookViewModel
    {
        public int BookCode { get; set; }
        public int NumberOfPages { get; set; }
        public BookGenr Genr { get; set; }
        public string BookName { get; set; }
        public string Author { get; set; }
        public string BookDescription { get; set; }
        public decimal Price { get; set; }

        public enum BookGenr
        {
            Literary_Fiction,
            Science_Fiction,
            Mystery,
            Thriller,
            Horror,
            Historical,
            Romance,
            Realist_Literature,
            Magical_Realism,
            Dystopian
        }

    }
}
