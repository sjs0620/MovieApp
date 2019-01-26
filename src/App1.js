import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://m.media-amazon.com/images/M/MV5BOTdlYjNhOTMtMTFlMi00OWM2LWE0ZjYtNjFkNzgzNDM1Mjc5XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UY100_CR28,0,100,100_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTg4NTQ3MDc1MV5BMl5BanBnXkFtZTgwMTA0MTY1MDE@._V1_UX100_CR0,0,100,100_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BODI0MzQyNjg5OF5BMl5BanBnXkFtZTgwNTc2NDE4MjE@._V1_UX100_CR0,0,100,100_AL_.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
