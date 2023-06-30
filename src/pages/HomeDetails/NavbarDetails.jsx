import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { contentUrl } from '../../repositories/repository'
import movie from '../../repositories/movie'
import "../HomeDetails/HomeDetails.css"


const NavbarDetails = () => {
    const {id} = useParams()

    const [movieListDetails, setMovieListDetails] = useState([])

    async function getMoviesByName(id){
        const currentMovies = await movie.getMoviesByName(id)
        setMovieListDetails(currentMovies)
    }
    useEffect(() => {
        getMoviesByName(id)
    }, [id])
    

  return (
    <div>
      {movieListDetails && (
        <div>
          <img
            className="backdrop_path-img"
            src={contentUrl + movieListDetails.backdrop_path}
            alt={movieListDetails.title}
          />
          <div className="backdrop_path-curtain">
            <div className="container">
              <div className="row">
                <div className="col-3 ">
                  <img className="MovieInfo-poster_path " src={contentUrl + movieListDetails.poster_path} alt="" />
                </div>
                <div className="col-9">
                  <h1 className="MovieInfo-title">{movieListDetails.title} <span>({movieListDetails.release_date})</span></h1>
                  <h4 className="MovieInfo-tagline"><b>{movieListDetails.tagline}</b></h4>
                  <b className="MovieInfo-overview">Overview</b>
                  <p className="MovieInfo-desc">{movieListDetails.overview}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default NavbarDetails
