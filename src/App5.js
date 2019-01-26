import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //Render: componentWillMount()->render()->componentDidMount()
  //Update: componentWillReceiveProps()->shouldcomponentUpdate()
  //         ->componentWillUpdate()->render()->componentDidUpdate()   
  state = {}
  
  componentDidMount(){
    // this._getMovies();
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json())
    // .then(json => console.log(json))
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie =>{
      // console.log(movie)
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        genres={movie.genres}
        rating={movie.rating}
        synopsis={movie.synopsis}
        key={movie.id}
      />
    })
    return movies
  }

  _getMovies =  async () => {
    const movies =  await this._callApi()
    this.setState({
      movies  //=== movies: movies
    })
  }

  _callApi = () => {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json())
    // .then(json => console.log(json))
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}


export default App;
