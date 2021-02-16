import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MovieListPoster from "./MovieListPoster";
function Tab2() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieReleaseYear, setReleaseYear] = useState("");
  const [movieList, setMovieList] = useState([]);

  function handleChangeMovieTitle(e) {
    setMovieTitle(e.target.value);
  }
  function handleChangeMovieReleaseYear(e) {
    setReleaseYear(e.target.value);
  }
  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?s=${movieTitle}&y=${movieReleaseYear}&apiKey=5f5cdbb5`
    )
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData);
        setMovieList(resData.Search);
      });
  }, [movieTitle, movieReleaseYear]);
  console.log(movieList);

  return (
    <div>
      <Input placeholder="Movie Title" onChange={handleChangeMovieTitle} />
      &nbsp;
      <Input
        placeholder="Release Year"
        onChange={handleChangeMovieReleaseYear}
      />
      <MovieListPoster movieList={movieList} />
    </div>
  );
}
export default Tab2;
