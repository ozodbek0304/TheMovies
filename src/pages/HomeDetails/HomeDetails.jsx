import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { contentUrl } from '../../repositories/repository'
import trendingDetails from '../../repositories/movie'
import "../HomeDetails/HomeDetails.css"


const HomeDetails = () => {
  const { id } = useParams();
  const [listDetails, setListDetails] = useState([])


  async function getTrendingMovieDetails(id) {
    const currentMovies = await trendingDetails.getTrendingMovieDetails(id)
    setListDetails(currentMovies)
  }

  useEffect(() => {
    getTrendingMovieDetails(id)
  }, [id])

  return (
    <div>
      {listDetails && (
        <div>
          <img
            className="backdrop_path-img"
            src={contentUrl + listDetails.backdrop_path}
            alt={listDetails.title}
          />
          
          <div className="backdrop_path-curtain">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <img className="MovieInfo-poster_path" src={contentUrl + listDetails.poster_path} alt="" />
                </div>
                <div className="col-9">
                  <h1 className="MovieInfo-title">{listDetails.title} <span>({listDetails.release_date})</span></h1>
                  <h4 className="MovieInfo-tagline"><b>{listDetails.tagline}</b></h4>
                  <b className="MovieInfo-overview">Overview</b>
                  <p className="MovieInfo-desc">{listDetails.overview}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default HomeDetails
