import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //Render: componentWillMount()->render()->componentDidMount()
  //Update: componentWillReceiveProps()->shouldcomponentUpdate()
  //         ->componentWillUpdate()->render()->componentDidUpdate()   
  state = {
    greeting:'Hello',
    movies:[
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
  }
  
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies:[
          ...this.state.movies,
          {
            title:"Transpotting",
            poster:"https://m.media-amazon.com/images/M/MV5BMTU0MDgyNjU3M15BMl5BanBnXkFtZTgwNTIwMjA2MTE@._V1_UX100_CR0,0,100,100_AL_.jpg"
          }
        ]
      })
    }, 5000)
  }
  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index )=> {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}


export default App;
