
import {IMG_CDN_URL} from '../utils/constant';


function MovieCard({posterPath}){
    return(
        <>
            <img src={IMG_CDN_URL + posterPath} className='w-40 mr-4'  alt="card"/>
        </>
    )
}

export default  MovieCard;