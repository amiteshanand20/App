import React, { useState, Fragment } from "react";
import Card from "../UI/Card/Card";
import classes from "./MovieItem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";

import BeenhereIcon from "@mui/icons-material/Beenhere";

const MovieItem = (props) => {
  const [comment, setComment] = useState(props.item.reviewComments);
  const [edit, setEdit] = useState(false);

  const onSaveEdit = () => {
    props.HandleEdit(
      {
        id: props.item.id,
        movieName: props.item.movieName,
        reviewComments: comment,
      },
      props.item.id
    );
    setEdit(false);
  };

  return (
    <Card className={classes.movieitem}>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <h2>
            {props.item.movieName}{" "}
            <IconButton onClick={() => props.HandleDelete(props.item.id)}>
              <DeleteIcon className={classes.icon} />
            </IconButton>
          </h2>
        </Grid>

        <Grid item xs={12}>
          {edit ? (
            <Grid container spacing={4}>
              <Grid item xs={10}>
                <div className={classes.control}>
                  <input
                    type="text"
                    name="movieName"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  onClick={() => {
                    onSaveEdit();
                  }}
                >
                  <BeenhereIcon className={classes.editicon} />
                </IconButton>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={4}>
              <Grid item xs={10}>
                <div className={classes.movieitemcmnt}>{comment}</div>{" "}
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  <EditIcon className={classes.editicon} />
                </IconButton>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default MovieItem;
