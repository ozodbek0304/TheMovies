import React from 'react'
import { Link } from 'react-router-dom'
import { contentUrl } from '../../repositories/repository'
import './ContentCardComponent.css'



export default function ContentCardComponent(props) {
    return (
        (props.movieList) &&
        (props.movieList.map((item, index) => {
            return (
                <div key={index} className="content-card-component">
                    <div className="card" >
                        <Link to={`/movie/${item.id}`}>
                        <img src={contentUrl + item.poster_path} alt={item.title} className="card-img-top img" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.release_date}</p>
                        </div>
                    </div>
                </div>
            )
        }))
    )
}





