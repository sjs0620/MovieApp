import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsys from 'react-lines-ellipsis'
//To install it run:
// yarn add react-lines-ellipsis

function Movie({title, poster, genres, rating, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster = {poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                    <MovieRating rating={rating} />
                </div>
                {/* <div className="Movie__Rating">
                    <MovieRating rating={rating} />
                </div> */}
                <div className="Movie__Synopsys">
                    <LinesEllipsys 
                        text= {synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>

            </div>
        </div>
    )
}

function MoviePoster({poster,alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre} &nbsp;</span>
    )
}

function _starRating({rating}){
    const starY = '★' //&#9733;&#x02605;
    const starN = '☆' //&#9734;&#x02606;
    const rate = rating/2
    let str = ""

    for(var i=1; i<=5; i++){
        if(i <= rate) str += starY
        else str += starN
    }
    return str
}

function MovieRating({rating}){
    const star = _starRating({rating})
    return (
        <span className="Movie__Rating">{rating}&nbsp; {star}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}
MovieRating.propTypes ={
    rating: PropTypes.number.isRequired
}

export default Movie;