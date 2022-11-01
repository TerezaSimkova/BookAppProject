using GoodReadsProject.Services.GoodReadsProjectCore.BusinessLayer;
using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GoodReadsProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {

        private readonly IRepositoryBusinessLayer mainBusinessLayer;

        public RatingController(IRepositoryBusinessLayer mainBusinessLayer)
        {
            this.mainBusinessLayer = mainBusinessLayer;
        }

        // GET: api/<RatingController>
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<BookRating> rating = mainBusinessLayer.FetchAllRatings();
            if (rating == null)
            {
                return NotFound();
            }
            return Ok(rating);
        }

        // GET api/<RatingController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            BookRating rating = mainBusinessLayer.GetRatingById(id);
            if (rating == null)
            {
                return NotFound();
            }
            return Ok(rating);
        }

        // POST api/<RatingController>
        [HttpPost]
        public IActionResult Post([FromBody] BookRating rating)
        {
            if (rating == null)
            {
                return BadRequest("Uups something went wrong!");
            }
            bool isAdded = mainBusinessLayer.CreateRating(rating);
            if (!isAdded)
            {
                return BadRequest("Rating can't be saved");
            }
            return CreatedAtAction("Post a rating", rating);
        }

        // PUT api/<RatingController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] BookRating rating)
        {
            var findRating = mainBusinessLayer.GetRatingById(id);
            if (findRating != null)
            {
                mainBusinessLayer.EditRating(rating);
                return Ok(rating);
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
            var findRating = mainBusinessLayer.GetRatingById(id);
            if (findRating != null)
            {
                mainBusinessLayer.DeleteRating(id);
                return Ok();
            }
            else
            {
                return BadRequest("Could not delete this user.");
            }
        }
    }
}
