import React, {useEffect, useState} from 'react'
import peoplePerson from '../../repositories/movie'
import { useParams } from 'react-router-dom'
import PeopleListComponent from '../../componets/content/PeopleListComponent '

export default function PopularPeople() {
    const {title} = useParams()

    const [people, setPeople] = useState([])

    async function getMoviesByNamePerson(title){
        const currentMovies = await peoplePerson.getMoviesByNamePerson(title)
        setPeople(currentMovies.results)
    }
    
    useEffect(() => {
        getMoviesByNamePerson(title)
    }, [title])
    
  return (  
    <div className="container">
        <div className='row'>
            <div className='col-md-12'>
                <PeopleListComponent people={people}/>
            </div>
        </div>  
        
    </div>
  )
}



