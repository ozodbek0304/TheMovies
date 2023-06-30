import React from 'react'
import { contentUrl } from '../../repositories/repository'
import './ContentCardComponent.css'
import { Link } from 'react-router-dom'


export default function PeopleCardComponent(props) {
    return (
        (props.people) &&
        (
            
            props.people.map((item, index) => {
            return (

                <div key={index} className="content-card-component">
                    <div className="card" >
                        <Link to={`/peopledetails/${item.id}`}>
                            <img src={contentUrl + item.profile_path} alt={item.name} className="card-img-top img" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.known_for.map(item => (
                                item.title
                            ))

                            }</p>
                        </div>
                    </div>
                </div>
            )
        }))
    )
}





