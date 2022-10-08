import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
                className={`row_poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
