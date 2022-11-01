using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.GoodReadsProjectCore.Models
{
    public class RegisterModel
    {
        public int UserId { get; set; }
        [Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }
        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }
        [Required]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$",
        ErrorMessage = "Password must meet requirements")]
        public string Password { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int? Age { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address { get; set; }
        public string PersonalDescription { get; set; }

    }
}
