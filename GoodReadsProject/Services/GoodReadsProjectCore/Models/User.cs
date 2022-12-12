using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectCore.Models
{
    public class User
    {
        public int UserId { get; set; }
        [Required]
        [StringLength(20)]
        public string Name { get; set; }
        [Required]
        [StringLength(20)]
        public string Surname { get; set; }
        public string UserName { get; set; }
        public int? Age { get; set; }
        [Required]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$",
     ErrorMessage = "Password must meet requirements")]
        public string Password { get; set; }
        public string EmailAddress { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }
        public string Address { get; set; }
        public string PersonalDescription { get; set; }
        [DisplayName("Type of user")]
        public UserType? userType { get; set; }
        [DisplayName("User level")]
        public UserLevel? userLevel { get; set; }
        public ICollection<UserBook> UserBooks { get; set; }
        public Role? userRole { get; set; }
        public string ReturnUrl { get; set; }
        public ICollection<BookRating> Ratings { get; set; }

        public enum UserType
        {
            young = 0,
            adult = 1,
            senior = 2
        }

        public enum UserLevel
        {
            silver = 0,
            platinum = 1,
            gold = 2
        }

        public enum Role
        {
            SignedInUser,
            AnonymousUser,
        }
    }
}
