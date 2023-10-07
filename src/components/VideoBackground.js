import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {addTrailerVideos} from '../utils/moviesSlice'

function VideoBackground({movieId}){

    // fetch trailer data from store
    const trailerVideos = useSelector((store=> store.movies?.trailerVideos))
    // store trailer array in store
    const dispatch = useDispatch();
    const getMoviesVideos = async () =>{
        const maindata = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +
        '/videos?language=en-US', API_OPTIONS);
        const json = await maindata.json();
        console.log(json.results);
        
        const filterTrailer = json.results.filter((video)=>{
            return video.type === "Trailer";
        })
        const trailer = filterTrailer.length ? filterTrailer[0]: json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideos(trailer));
        
    }
    useEffect(()=>{
        getMoviesVideos();
    },[])
    return(
        <div className="">
           <iframe className="w-full h-screen"  src={'https://www.youtube.com/embed/' + trailerVideos?.key+'?autoplay=1&mute=1' }
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
             
        </div>
    )
}

export default VideoBackground;