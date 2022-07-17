using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using movieService.Models;
using movieService.Services;

namespace movieService.Controllers
{

    [ApiController]
    [Route("api/[controller]/[action]")]
    public class MovieReviewController : ControllerBase
    {
        private readonly IMovieService _IMovieService;
        public MovieReviewController(IMovieService MovieService)
        {
            _IMovieService = MovieService;
        }

        [HttpGet]
        public async Task<IActionResult> GetMovies()
        {
            var _movies = await _IMovieService.GetMoviesList();
            return Ok(_movies);
        }


        [HttpPost]
        public async Task<IActionResult> AddMovieData(MovieDTO movie)
        {
            var _response = await _IMovieService.AddMovie(movie);
            return Ok(_response);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMovieData([FromBody] MovieDTO movie, [FromRoute] int id)
        {
            var _response = await _IMovieService.UpdateMovie(movie, id);
            return Ok(_response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovieData([FromRoute] int id)
        {
            var _response = await _IMovieService.DeleteMovie(id);
            return Ok(_response);
        }











    }
}