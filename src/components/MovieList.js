
import MovieCard from '../components/MovieCard';

function MovieList({title,movies}){
    console.log(movies)
    if(movies === null) return
    console.log(movies[0])
    return(
      
            <div className='px-[3rem]'>
                <h1 className='text-[20px] font-Roboto font-bold py-4 text-white'>{title}</h1>
                <div className='flex overflow-x-scroll'>
                {
                    movies.map((e)=>{
                        return <MovieCard posterPath = {e.poster_path}/>
                    })
                }
                </div>
                
            </div>
     
    )
}

export default  MovieList;