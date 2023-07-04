import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { contentUrl } from '../../repositories/repository'
import movie from '../../repositories/movie'
import "../HomeDetails/HomeDetails.css"


const NavbarDetails = () => {
    const {id} = useParams()

    const [movieListDetails, setMovieListDetails] = useState([])
  const [loading, setLoading] = useState(false);


    async function getMoviesByName(id){
      setLoading(true)
        const currentMovies = await movie.getMoviesByName(id)
        setMovieListDetails(currentMovies)
      setLoading(false)
    }
    useEffect(() => {
        getMoviesByName(id)
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
(      movieListDetails && (
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
      ))
      }
    </div>
  );
}

export default NavbarDetails
