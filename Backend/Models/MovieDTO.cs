using System.Collections.Generic;

namespace movieService.Models
{
    public class MovieDTO
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string ReviewComments { get; set; }

    }


    public class AddMovieResponse : ResponseStatus
    {

        public int Id { get; set; }
    }








    public class MovieList : ResponseStatus

    {
        public List<MovieDTO> movies { get; set; }


    }


}