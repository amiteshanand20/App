import React, { useState, useEffect } from "react";
import Addmovie from "../AddMovie/Addmovie";
import classes from "./Home.module.css";
import MovieItem from "../MovieList/MovieItem";
import Card from "../UI/Card/Card";
import swal from "sweetalert";

import {
  getdata,
  AddMoive,
  deleteMovie,
  editMovie,
} from "../Endpoints/Endpoints";
const Home = (props) => {
  const [movieList, setMovie] = useState([]);

  useEffect(() => {
    getdata().then((response) => {
      setMovie(response.movies);
    });

  }, []);

  const HandleAddMovie = (movie) => {
    console.log(movie);
    AddMoive(movie).then((response) => {
      if (response.status == 2) {
        setMovie((prev) => {
          return [{ ...movie, id: response.id }, ...prev];
        });

        swal({
          text: "Movie Added sucessfully",
          icon: "success",
        });
      }
    });
  };

  const HandleDelete = (id) => {
    deleteMovie(id).then((res) => {
      if (res.status == 5) {
        const filterdmovie = movieList.filter((x) => x.id != id);
        setMovie(filterdmovie);
      }
    });
  };

  const HandleEdit = (movie, id) => {
    editMovie(movie, id).then((res) => {
      if (res.status != 3) {
        //
        swal({
          text: "Oops something went wrong. Please try later!",
          icon: "error",
        });
      }
    });

    console.log(movie, id);
  };

  return (
    <React.Fragment>
      <Addmovie HandleAddMovie={HandleAddMovie} />
      {movieList.length > 0 && (
        <Card className={classes.container}>
          {movieList.map((item) => (
            <MovieItem
              key={item.id}
              item={item}
              HandleDelete={HandleDelete}
              HandleEdit={HandleEdit}
            />
          ))}
        </Card>
      )}
    </React.Fragment>
  );
};

export default Home;
