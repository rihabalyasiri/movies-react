import React from 'react';

const Movie = (props) => {
    return ( 
        <div className="movie">
            <h3>Title: {props.title}</h3>
            <h3>Year: {props.year}</h3>
            <h3>Director: {props.director}</h3>
            <h3>Duration: {props.duration}</h3>
            <h3>Genre:{props.genre}</h3>
            <h3>Rate: {props.rate}</h3>
        </div>
     );
}
 
export default Movie;