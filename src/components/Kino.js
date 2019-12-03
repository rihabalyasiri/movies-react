import React, { useState } from 'react';
import MoviesData from '../moviesData';
import Movie from './Movie';
import uuid from 'react-uuid'

// const Kino = () => {
//     let myObj = { arr: [] }
//     console.log(myObj.arr)
//     const oldMoviesFunc = () => {
//         let actualYear = new Date().getFullYear();
//         let oldMoviesArray;
//         console.log(actualYear)
//         oldMoviesArray = MoviesData.map(movie => {
//             if ((actualYear - movie.year) >= 25) {
//                 return <Movie
//                     title={movie.title}
//                     year={movie.year}
//                     director={movie.director}
//                     duration={movie.duration}
//                     genre={movie.genre.join(', ')}
//                     rate={movie.rate}>
//                 </Movie>
//             }
//         })
//         myObj.arr = oldMoviesArray;
//         console.log(myObj.arr[0].props)

//     }


//     return ();
// }
class Kino extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movie: MoviesData }
    }

    oldestHandler = () => {
        console.log('oldest')
        const ascendingMovies = this.state.movie.sort((x, y) => (x.year - y.year))
        this.setState({MoviesData: ascendingMovies})
    }

    newestHandler = () => {
        console.log('newest')
        const descendingMovies = this.state.movie.sort((x, y) => (y.year - x.year))
        this.setState({MoviesData: descendingMovies})
    }

    rateHandler = () => {
        console.log('rate')
        let rateMovies = this.state.movie.sort((x,y) => (y.rate-x.rate))
        console.log(rateMovies)
        this.setState({MoviesData: rateMovies})
    }

    ascendingLetters = () => {
        let ascMovies = this.state.movie.sort((x,y) => {
            if(x.title > y.title) {
                return 1;
            }else {
                return -1;
            }
        });
        console.log(ascMovies)
        this.setState({MoviesData: ascMovies})
    }

    descendingLetters = () => {
        let descMovies = this.state.movie.sort((x,y) => {
            if(x.title < y.title) {
                return 1;
            }else {
                return -1;
            }
        });
        this.setState({MoviesData: descMovies})
    }


    render() {

        let MoviesDataArray;
        MoviesDataArray = this.state.movie.map(movie => {
            return <Movie key={uuid()}
                title={movie.title}
                year={movie.year}
                director={movie.director}
                duration={movie.duration}
                genre={movie.genre.join(', ')}
                rate={movie.rate}>
            </Movie>
        })
        return (<div>
            <h1 className="heading">List Movies</h1>
            <div className="input-block">
                <input type="button" value="Old" onClick={this.oldestHandler} />
                <input type="button" value="New" onClick={this.newestHandler} />
                <input type="button" value="Rate" onClick={this.rateHandler}/>
                <input type="button" value="AscendingLetters" onClick={this.ascendingLetters} />
                <input type="button" value="descendingLetters" onClick={this.descendingLetters}/>
            </div>
            <div className="kino-grid">
                {MoviesDataArray}
            </div>
        </div>);
    }
}


export default Kino;