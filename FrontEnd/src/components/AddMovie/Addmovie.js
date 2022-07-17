import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./AddMovie.module.css";

const Addmovie = (props) => {
  //
  const [bthDisable, setBtn] = useState(true);
  const [movie, setMovie] = useState({
    id: 0,
    movieName: "",
    reviewComments: "",
  });

  useEffect(() => {
    if (movie.movieName != "" && movie.reviewComments != "") {
      setBtn(false);
    }
  }, [movie]);

  const HandleOnchange = (e) => {
    setMovie((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const HandleSubmit = () => {  
    props.HandleAddMovie(movie);
    setMovie({
      id: 0,
      movieName: "",
      reviewComments: "",
    });
    setBtn(true);
  };

  return (
    <Card className={classes.container}>
      <div className={`${classes.control}`}>
        <label>Movie Name</label>
        <input
          type="text"
          name="movieName"
          value={movie.movieName}
          onChange={(e) => HandleOnchange(e)}
        />
      </div>

      <div className={`${classes.control}`}>
        <label>Comments</label>
        <input
          type="text"
          name="reviewComments"
          value={movie.reviewComments}
          onChange={(e) => HandleOnchange(e)}
        />
      </div>

      <div className={`${classes.add}`}>
        <Button onClick={HandleSubmit} disabled={bthDisable}>
          Add
        </Button>
      </div>
    </Card>
  );
};

export default Addmovie;
