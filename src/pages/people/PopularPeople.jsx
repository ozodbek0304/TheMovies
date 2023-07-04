import React, {useEffect, useState} from 'react'
import peoplePerson from '../../repositories/movie'
import { useParams } from 'react-router-dom'
import PeopleListComponent from '../../componets/content/PeopleListComponent '

export default function PopularPeople() {
    const {title} = useParams()

    const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false);


    async function getMoviesByNamePerson(title){
        setLoading(true)
        const currentMovies = await peoplePerson.getMoviesByNamePerson(title)
        setPeople(currentMovies.results)
        setLoading(false)
    }
    
    useEffect(() => {
        getMoviesByNamePerson(title)
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
                <PeopleListComponent people={people}/>
            </div>
        </div> ) }
        
    </div>
  )
}



