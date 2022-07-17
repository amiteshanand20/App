using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MovieReviewApp.Entities;
using movieService.Models;
namespace movieService.Services
{
    public class MovieService : IMovieService
    {
        private readonly MoviesDBContext _context;
        private readonly IMapper _mapper;
        public MovieService(MoviesDBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<MovieList> GetMoviesList()
        {
            var _movie = _context.TblMovies;
            var _data = _mapper.Map<List<MovieDTO>>(_movie);
            return new MovieList() { status = BussinessStatus.Ok, movies = _data };
        }
        public async Task<AddMovieResponse> AddMovie(MovieDTO movie)
        {
            var _movie = _mapper.Map<TblMovie>(movie);
            _context.TblMovies.Add(_movie);
            await _context.SaveChangesAsync();
            return new AddMovieResponse() { Id = _movie.Id, status = BussinessStatus.Created, ResponseMessage = "Movie data added sucessfully" };
        }
        public async Task<ResponseStatus> UpdateMovie(MovieDTO movie, int id)
        {
            var _movie = new TblMovie();
            _movie.Id = id;
            _movie.MovieName = movie.MovieName;
            _movie.ReviewComments = movie.ReviewComments;
            _context.TblMovies.Update(_movie);
            await _context.SaveChangesAsync();
            return new ResponseStatus() { status = BussinessStatus.Updated, ResponseMessage = "Record updated successfully" };
        }
        public async Task<ResponseStatus> DeleteMovie(int id)
        {
            var movie = await _context.TblMovies.FindAsync(id);
            if (movie != null)
            {
                _context.TblMovies.Remove(movie);
                await _context.SaveChangesAsync();
                return new ResponseStatus() { status = BussinessStatus.Deleted, ResponseMessage = "Movie deleted sucessfully" };
            }
            else
            {
                return new ResponseStatus() { status = BussinessStatus.Error, ResponseMessage = "Error in deleting the movie " };
            }
        }
    }
}