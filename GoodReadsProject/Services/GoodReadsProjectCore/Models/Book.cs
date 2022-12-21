using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectCore.Models
{
    public class Book
    {
        public int BookId { get; set; }
        [Required]
        public int BookCode { get; set; }
        [DisplayName("Pages")]
        public int NumberOfPages { get; set; }
        [Required]
        [DisplayName("Book Genr")]
        public BookGenr Genr { get; set; }
        [Required]
        [StringLength(25)]
        public string BookName { get; set; }
        [Required]
        public string Author { get; set; }
        public string BookDescription { get; set; }
        [Required]
        [DisplayName("Price")]
        [RegularExpression(@"^(0|-?\d{0,16}(\.\d{0,2})?)$")]
        public decimal Price { get; set; }     
        //FK verso Rating      
        public ICollection<BookRating> Ratings { get; set; }
        public ICollection<UserBook> UserBooks { get; set; }
        public ICollection<User> Users { get; set; }

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
