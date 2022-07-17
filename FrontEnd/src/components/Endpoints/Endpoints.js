import { API } from "../../config";

export const getdata = () => {
  return fetch(`${API}/api/MovieReview/GetMovies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const AddMoive = (movie) => {
  return fetch(`${API}/api/MovieReview/AddMovieData`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(movie),
  }).then((res) => res.json());
};

export const deleteMovie = (id) => {
  return fetch(`${API}/api/MovieReview/DeleteMovieData/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const editMovie = (movie, id) => {
  return fetch(`${API}/api/MovieReview/UpdateMovieData/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(movie),
  }).then((res) => res.json());
};
