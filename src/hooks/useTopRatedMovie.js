
import React, { useEffect } from "react";
import {API_OPTIONS} from '../utils/constant';
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovie = () =>{
    const dispatch = useDispatch();


    const getTopRatedMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log(json.results)
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])
}

export default useTopRatedMovie;