import React, {useEffect, useState} from 'react'
import movie from '../../repositories/movie'
import { useParams } from 'react-router-dom'
import ConentListComponent from '../../componets/content/ConentListComponent'

export default function MoviePage() {
    const {title} = useParams()

    const [movieList, setMovieList] = useState([])

    async function getMoviesByName(title){
        const currentMovies = await movie.getMoviesByName(title)
        setMovieList(currentMovies.results)
    }
    
    useEffect(() => {
        getMoviesByName(title)
    }, [title])
    
  return (  
    <div className="container">
        <div className='row'>
            <div className='col-md-12'>
                <ConentListComponent movieList={movieList}/>
            </div>
        </div>  
        
    </div>
  )
}



