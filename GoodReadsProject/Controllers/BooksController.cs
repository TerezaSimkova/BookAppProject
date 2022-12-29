using GoodReadsProject.AppHelper.Models;
using GoodReadsProject.Services.GoodReadsProjectCore.BusinessLayer;
using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {

        private readonly IRepositoryBusinessLayer mainBusinessLayer;

        public BooksController(IRepositoryBusinessLayer mainBusinessLayer)
        {
            this.mainBusinessLayer = mainBusinessLayer;
        }


        // GET: api/<RatingController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var books =  await mainBusinessLayer.FetchAllBooks();
            if (books == null)
            {
                return NotFound(books);
            }
            return Ok(books);
        }

        // GET api/<RatingController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Book book = mainBusinessLayer.GetBookById(id);
            if(book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        // POST api/<BooksController>
        [HttpPost]
        public IActionResult CreateBook([FromBody] BookViewModel viewBook)
        {
            var bookSerialize = System.Text.Json.JsonSerializer.Serialize<BookViewModel>(viewBook);
            var bookDeserial = System.Text.Json.JsonSerializer.Deserialize<BookViewModel>(bookSerialize);

            if (bookDeserial == null)
            {
                return BadRequest("Uups something went wrong!");
            }
            Book book = new Book
            {
                BookCode = bookDeserial.BookCode,
                BookName = bookDeserial.BookName,
                BookDescription = bookDeserial.BookDescription,
                Author = bookDeserial.Author,
                NumberOfPages = bookDeserial.NumberOfPages,
                Price = bookDeserial.Price,
                Genr = (Book.BookGenr)bookDeserial.Genr
            };
            bool isAdded = mainBusinessLayer.CreateBook(book);
            if (!isAdded)
            {
                return BadRequest("Book can't be saved");
            }
            return CreatedAtAction("Post a Book", book);
        }

        // PUT api/<RatingController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Book book)
        {
            var findBook = mainBusinessLayer.GetBookById(id);
            if (findBook != null)
            {
                mainBusinessLayer.EditBook(book);
                return Ok(book);
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
            var findBook = mainBusinessLayer.GetBookById(id);
            if (findBook != null)
            {
                mainBusinessLayer.DeleteBook(id);
                return Ok();
            }
            else
            {
                return BadRequest("Could not delete this book.");
            }
        }
    }
}
