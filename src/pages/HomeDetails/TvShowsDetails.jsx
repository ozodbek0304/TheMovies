import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { contentUrl } from '../../repositories/repository'
import tvshows from '../../repositories/movie'
import "../HomeDetails/HomeDetails.css"


const TvShowsDetails = () => {
    const {id} = useParams()

    const [tvShowsListDetails, setTvShowsListDetails] = useState([])
  const [loading, setLoading] = useState(false);


    async function getMoviesByNameTvShows(id){
      setLoading(true)
        const currentMovies = await tvshows.getMoviesByNameTvShows(id)
        setTvShowsListDetails(currentMovies)
      setLoading(false)
    }
    console.log(tvShowsListDetails);
    useEffect(() => {
      getMoviesByNameTvShows(id)
    }, [id])

  return (
    <div>
      {
        (loading)?
        (
          <div className=' min-vh1-100 text-center text-white'>
          <h1 className='display-1 '>LOADING..</h1>
        </div>
        ):
  (    tvShowsListDetails && (
        <div>
          <img
            className="backdrop_path-img"
            src={contentUrl + tvShowsListDetails.backdrop_path}
            alt={tvShowsListDetails.title}
          />
          <div className="backdrop_path-curtain">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <img className="MovieInfo-poster_path" src={contentUrl + tvShowsListDetails.poster_path} alt="" />
                </div>
                <div className="col-9">
                  <h1 className="MovieInfo-title">{tvShowsListDetails.name} <span>({tvShowsListDetails.first_air_date})</span></h1>
                  <h4 className="MovieInfo-tagline"><b>{tvShowsListDetails.first_air_date}</b></h4>
                  <b className="MovieInfo-overview">Overview</b>
                  <p className="MovieInfo-desc">{tvShowsListDetails.title}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      ))
      }
    </div>
  );
}

export default TvShowsDetails
