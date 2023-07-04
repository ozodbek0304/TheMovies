import React, {useEffect, useState} from 'react'
import movie from '../../repositories/movie'
import { useParams } from 'react-router-dom'
import ConentListComponent from '../../componets/content/ConentListComponent'

export default function MoviePage() {
    const {title} = useParams()

    const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false);


    async function getMoviesByName(title){
        setLoading(true)
        const currentMovies = await movie.getMoviesByName(title)
        setMovieList(currentMovies.results)
        setLoading(false)
    }
    
    useEffect(() => {
        getMoviesByName(title)
    }, [title])
    
  return (  
    <div className="container">
{  

(loading)?
(
    <div className=' min-vh1-100 text-center text-white'>
    <h1 className='display-1 '>LOADING..</h1>
  </div>
):
(<div className='row'>
            <div className='col-md-12'>
                <ConentListComponent movieList={movieList}/>
            </div>
        </div> ) }
        
    </div>
  )
}



