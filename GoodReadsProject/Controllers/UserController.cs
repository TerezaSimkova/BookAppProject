using GoodReadsProject.AppHelper.Models;
using GoodReadsProject.Services.GoodReadsProjectCore.BusinessLayer;
using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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

        // POST api/<RatingController>
        [HttpPost]
        public IActionResult Post([FromBody] UserViewModel userViewModel)
        {

            if (userViewModel == null)
            {
                return BadRequest("Uups something went wrong!");
            }
            User user = new User
            {
                Name = userViewModel.Name,
                Surname = userViewModel.Surname,
                UserName = userViewModel.UserName,
                Address = userViewModel.Address,
                EmailAddress = userViewModel.EmailAddress,
                Password = userViewModel.Password,
                DateOfBirth = userViewModel.DateOfBirth,
                PersonalDescription = userViewModel.PersonalDescription
            };
            bool isAdded = mainBusinessLayer.CreateUser(user);
            if (!isAdded)
            {
                return BadRequest("User can't be saved");
            }
            return CreatedAtAction("Post an user", user);
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
