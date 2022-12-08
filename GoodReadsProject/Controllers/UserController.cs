using GoodReadsProject.AppHelper.Models;
using GoodReadsProject.Services.GoodReadsProjectCore.BusinessLayer;
using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace GoodReadsProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IRepositoryBusinessLayer mainBusinessLayer;

        public UserController(IRepositoryBusinessLayer mainBusinessLayer)
        {
            this.mainBusinessLayer = mainBusinessLayer;
        }
        // GET: api/<RatingController>
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<User> users = mainBusinessLayer.FetchAllUsers();
            if (users == null)
            {
                return NotFound();
            }
            return Ok(users);
        }

        // GET api/<RatingController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            User user = mainBusinessLayer.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // POST api/<RatingController> -> Registrazione

        [HttpPost]
        public IActionResult Register([FromBody] UserViewModel userViewModel)
        {

            if (userViewModel == null)
            {
                return BadRequest("Uups something went wrong!");
            }
            //durante la registrazione viene in automatico settato user role a 0 
            User user = new User
            {
                Name = userViewModel.Name,
                Surname = userViewModel.Surname,
                UserName = userViewModel.UserName,
                Address = userViewModel.Address,
                EmailAddress = userViewModel.EmailAddress,
                Password = userViewModel.Password,
                DateOfBirth = userViewModel.DateOfBirth,
                PersonalDescription = userViewModel.PersonalDescription,
                userRole = 0
            };
            bool isAdded = mainBusinessLayer.CreateUser(user);
            if (!isAdded)
            {
                return BadRequest("User can't be saved");
            }
            return CreatedAtAction("Post an user", user);
        }

        //[Route("api/User/login")]
        //[HttpPost("api/User/login")]
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(UserViewModel userViewModel)
        {
            if (userViewModel == null)
            {
                return BadRequest("Uups something went wrong!");
            }

            var userPassword = userViewModel.Password;
            var userEmail= userViewModel.EmailAddress;
            User currentUser = mainBusinessLayer.GetUserByMailAndPassword(userPassword, userEmail);

            if(currentUser != null && currentUser.Password.Equals(userViewModel.Password))
            {
                //UTENTE AUTENTICATO
                var claims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Email, userViewModel.EmailAddress),
                        new Claim(ClaimTypes.Role, currentUser.userRole.ToString())
                    };

                var authProperties = new AuthenticationProperties
                {
                    ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(30),
                    RedirectUri = userViewModel.ReturnUrl
                };

                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                await HttpContext.SignInAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimsIdentity),
                    authProperties
                    );
                return Ok();
            }
            else
            {
                return BadRequest("Can´t sign you in.");
            }
        }

            // PUT api/<RatingController>/5
            [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] User user)
        {
            var findUser = mainBusinessLayer.GetUserById(id);
            if (findUser != null)
            {
                mainBusinessLayer.EditUser(user);
                return Ok(user);
            }
            else
            {
                return BadRequest("Some data are wrong.");
            }
        }

        // DELETE api/<RatingController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var finduser = mainBusinessLayer.GetUserById(id);
            if (finduser != null)
            {
                mainBusinessLayer.DeleteUser(id);
                return Ok();
            }
            else
            {
                return BadRequest("Could not delete this user.");
            }
        }
    }
}
