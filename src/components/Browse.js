
import Header from '../components/Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from  '../components/MainContainer';
import SecondaryContainer from  '../components/SecondaryContainer';

function Browse(){
    useNowPlayingMovies();
    return(
        <>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        {/* [mainContainer
     - video background
     - video title
    Secondary container
        - movies list* n
        - cards*n
    
    
    ] */}
        </>
    )
}

export default Browse;