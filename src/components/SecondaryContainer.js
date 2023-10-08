

import MovieList from "../components/MovieList";

import { useSelector } from "react-redux";

function SecondaryContainer(){
    const movies = useSelector(state => state.movies)
    console.log(movies)
    return(
        <div className="bg-black  -mt-52">
            <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies}/>
            <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
            <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
            
           
        </div>
    )
}

export default  SecondaryContainer;