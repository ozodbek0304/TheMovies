import React, {useEffect, useState} from 'react'
import tvshows from '../../repositories/movie'
import { useParams } from 'react-router-dom'
import TvListComponent from '../../componets/content/TvListComponent'

export default function TvShows() {
    const {title} = useParams()

    const [tvList, setTvShowsList] = useState([])
    async function getMoviesByNameTvShows(title){
        const currentMovies = await tvshows.getMoviesByNameTvShows(title)
        setTvShowsList(currentMovies.results)
    }
    
    useEffect(() => {
        getMoviesByNameTvShows(title)
    }, [title])
    
  return (  
    <div className="container">
        <div className='row'>
            <div className='col-md-12'>
                <TvListComponent tvList={tvList}/>
            </div>
        </div>  
        
    </div>
  )
}



