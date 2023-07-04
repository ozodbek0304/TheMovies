import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { contentUrl } from '../../repositories/repository'
import people from '../../repositories/movie'
import "../HomeDetails/HomeDetails.css"


const PeopleDetails = () => {
    const {id} = useParams()

    const [peopleListDetails, setPeopleListDetails] = useState([])
  const [loading, setLoading] = useState(false);


    async function getMoviesByNamePerson(id){
      setLoading(true)
        const currentMovies = await people.getMoviesByNamePerson(id)
        setPeopleListDetails(currentMovies)
      setLoading(false)

    }
    useEffect(() => {
      getMoviesByNamePerson(id)
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
 (     peopleListDetails && (
        <div>
          <img
            className="backdrop_path-img"
            src={contentUrl + peopleListDetails.profile_path}
            alt={peopleListDetails.title}
          />
          <div className="backdrop_path-curtain">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <img className="MovieInfo-poster_path" src={contentUrl + peopleListDetails.profile_path} alt="" />
                </div>
                <div className="col-9 ">
                  <h1 className="MovieInfo-title">{peopleListDetails.name}</h1>
                  <h4 className="MovieInfo-tagline"><b>  {peopleListDetails.also_known_as} {peopleListDetails.birthday}</b></h4>
                  <b className="MovieInfo-overview">Biography</b>
                  <p className="MovieInfo-desc">{peopleListDetails.biography}</p>
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

export default PeopleDetails
