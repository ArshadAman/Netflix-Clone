import React, {useState, useEffect} from "react";
import "./Banner.css";
import axios from './axios';
import Movierequest from './Requests'

function Banner() {

    //Fetch the movie
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        // FETCH THE MOVIE FROM THE API 
        async function fetchData(){
            const request = await axios.get(Movierequest.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    //Truncate the description
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...': string;
    }


  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(`${movie?.overview}`, 200)}</h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
