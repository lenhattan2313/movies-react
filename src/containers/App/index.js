import React, { useState } from "react";
import Nav from "../../components/Nav";
import SearchBox from "../../components/SearchBox";
import { API_KEY } from "../../constant";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";
import SliderHero from "../SliderHero";
import Header from "../../components/Header";

function App() {
  const [movies, setMovies] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  function handleSubmit(value) {
    async function fetchData() {
      try {
        const requestURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`;
        const response = await fetch(requestURL);
        const data = await response.json();
        setMovies(data.results);
        console.log(data);

        setTotalResult(data.total_results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    setSearchTerm(value);
  }
  function nextPage(pageNumber) {
    async function fetchData() {
      try {
        const requestURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${pageNumber}`;
        const response = await fetch(requestURL);
        const responseJSON = await response.json();
        const data = await responseJSON.results;
        setMovies(data);
        setCurrentPage(pageNumber);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }
  const numberPage = Math.ceil(totalResult / 20);
  return (
    <div className="App">
      <Header />
      {/* <SearchBox handleSubmit={handleSubmit} /> */}
      <SliderHero />
      <MovieList movies={movies} />
      {totalResult > 20 ? (
        <Pagination
          numberPage={numberPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      ) : null}
    </div>
  );
}

export default App;
