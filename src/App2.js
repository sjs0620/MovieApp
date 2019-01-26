import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
const movies=[
  {
    title:"Matrix",
    poster:"https://m.media-amazon.com/images/M/MV5BOTdlYjNhOTMtMTFlMi00OWM2LWE0ZjYtNjFkNzgzNDM1Mjc5XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UY100_CR28,0,100,100_AL_.jpg"
  },
  {
    title:"Full Metal Jacket",
    poster:"https://m.media-amazon.com/images/M/MV5BMjE1MzE4NDA1MF5BMl5BanBnXkFtZTcwNzgzNjU4MQ@@._V1_UX100_CR0,0,100,100_AL_.jpg"
  },
  {
    title:"Oldboy",
    poster:"https://m.media-amazon.com/images/M/MV5BMTg4NTQ3MDc1MV5BMl5BanBnXkFtZTgwMTA0MTY1MDE@._V1_UX100_CR0,0,100,100_AL_.jpg"
  },
  {
    title:"Star Wars",
    poster:"https://m.media-amazon.com/images/M/MV5BODI0MzQyNjg5OF5BMl5BanBnXkFtZTgwNTc2NDE4MjE@._V1_UX100_CR0,0,100,100_AL_.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index )=> {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}


export default App;
