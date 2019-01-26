import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {
  //Mounting : componentWillMount() -> render() -> componentDidMount()
  //Updateing : componentWillReceiveProps() -> shouldCompnentUpdate() -> componentWillUpdate() -> render() -> getSnapshotBeforeUpdate() ->componentDidUpdate()
  
  state = {}

  componentDidMount(){
    this._getMovies()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie 
        title = {movie.title_english} 
        poster = {movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        rating={movie.rating}
        synopsis={movie.synopsis}
      />
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    // return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    // .then(res => {
    //   if (res.status === 200 || res.status === 201) {
    //     res.json().then(json => console.log(json));
    //   } else {
    //     console.error(res.statusText);
    //   }
    // })
    .then(res => res.json())
    .then(json => json.data.movies)
    // .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  render() {
    const movie = this.state.movies;
    return (
      <div className={movie ? "App" : "App--Loading"}>
        {movie ? this._renderMovies() : `Loading`}
      </div>
    );
  }
}

export default App;
