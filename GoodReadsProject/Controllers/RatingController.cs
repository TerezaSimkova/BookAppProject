using GoodReadsProject.Services.GoodReadsProjectCore.BusinessLayer;
using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

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
        // pass another model - frontend model
        [HttpPut]
        [Route("edit")]
        public IActionResult Put([FromBody] BookRating rating)
        {
            var findRating = mainBusinessLayer.GetRatingById(rating.RatingId);
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
        [HttpDelete("{ratingId}")]
        public IActionResult Delete([FromRoute] int ratingId)
        {
            if (ratingId > 0)
            {
                mainBusinessLayer.DeleteRating(ratingId);
                return Ok();
            }
            else
            {
                return BadRequest("Could not delete this user.");
            }
        }
    }
}
