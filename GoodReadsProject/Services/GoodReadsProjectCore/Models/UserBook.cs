using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectCore.Models
{
    public class UserBook
    {
        //FK verso User      
        public int UserId { get; set; }
        public User User { get; set; }
        //FK verso Book      
        public int BookId { get; set; }
        public Book Book { get; set; }

    }
}
