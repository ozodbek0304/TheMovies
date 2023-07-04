import React, { useEffect, useState } from 'react'
import tvshows from '../../repositories/movie'
import { useParams } from 'react-router-dom'
import TvListComponent from '../../componets/content/TvListComponent'

export default function TvShows() {
    const { title } = useParams()

    const [tvList, setTvShowsList] = useState([])
    const [loading, setLoading] = useState(false);

    async function getMoviesByNameTvShows(title) {
        setLoading(true)
        const currentMovies = await tvshows.getMoviesByNameTvShows(title)
        setTvShowsList(currentMovies.results)
        setLoading(false)

    }

    useEffect(() => {
        getMoviesByNameTvShows(title)
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
 (   <div className='row'>
                <div className='col-md-12'>
                    <TvListComponent tvList={tvList} />
                </div>
            </div>)}

        </div>
    )
}



