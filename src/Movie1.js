import React from 'react';
import PropType from 'prop-types';
import './Movie.css';

// class Movie extends Component{
//   //yarn add prop-types
//   static propType = {
//     title: propType.string.isRequired,
//     poster: propType.string.isRequired
//   }
//   render(){
//     return(
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }
function Movie({title, poster, genres, synopsis}){
  return(
    <div className="Movie">
      <div className="Movie_columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie_columns">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre,index) => 
          <MovieGenre genre={genre} key={index}/>)}
        </div>
        <p className="Movie_Sysnopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}
// class MoviePoster extends Component{
//   static propType = {
//     poster: propType.string.isRequired
//   }
//   render(){
//     console.log(this.props.poster)
//     return(
//       <img src={this.props.poster} alt="movie poster"/>
//     )
//   }
// }
function MoviePoster ({poster,alt}){
  return(
    <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
  )
}

function MovieGenre({genre}){
  return(
    <span className="Movie_Genre">{genre}</span>
  )
}
// function MovieRating({rating}){
// star-bord:&#xe83a;
// star-rate:&#xe8cf;
// star-half:&#xe839;	
//   return(
//     <span className="Movie_Rate">{rating}</span>
//   )
// }

Movie.propType = {
  title: PropType.string.isRequired,
  poster: PropType.string.isRequired,
  genres: PropType.array.isRequired,
  rating: PropType.number,
  synopsis: PropType.string.isRequired
}

MoviePoster.propType ={
  poster:PropType.string.isRequired,
  alt: PropType.string.isRequired
}

MovieGenre.propType = {
  genre: PropType.string.isRequired
}

export default Movie;