import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import Movierequest from "../Requests";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />

      <Banner />

      {/* Bunch of Different Rows  */}
      <Row 
      title="NETFIX ORIGINALS" 
      fetchUrl = {Movierequest.fetchNetflixOriginals}
      isLargeRow
      />
      <Row 
      title="TRENDING NOW" 
      fetchUrl = {Movierequest.fetchTrending}
      />
      <Row 
      title="TOP RATED" 
      fetchUrl = {Movierequest.fetchTopRated}
      />
      <Row 
      title="ACTION MOVIES" 
      fetchUrl = {Movierequest.fetchActionMovies}
      />
      <Row 
      title="COMEDY MOVIES" 
      fetchUrl = {Movierequest.fetchComedyMovies}
      />
      <Row 
      title="HORROR MOVIES" 
      fetchUrl = {Movierequest.fetchHorrorMovies}
      />
      <Row 
      title="ROMANCE MOVIES" 
      fetchUrl = {Movierequest.fetchRomanceMovies}
      />
      <Row 
      title="DOCUMENTRIES" 
      fetchUrl = {Movierequest.fetchDocumentaries}
      />
    </div>
  );
}

export default HomeScreen;
