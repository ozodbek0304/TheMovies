import React, {useEffect, useState} from 'react'
import lastest from '../../repositories/lastest'
import { useParams } from 'react-router-dom'


const MoviesList = () => {
    const {title} = useParams()

    const [list, setList] = useState([])

    async function getMoviesByName(title){
        const currentMovies = await lastest.getMoviesByName(title)
        setList(currentMovies.results)
    }
    
    useEffect(() => {
        getMoviesByName(title)
    }, [title])
    
  return (
    <div>
      {
        list.map(item=>(
           console.log(item)
        ))
      }
    </div>
  )
}

export default MoviesList
