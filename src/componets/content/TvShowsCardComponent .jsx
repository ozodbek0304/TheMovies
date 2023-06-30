import React from 'react'
import { Link } from "react-router-dom"
import { contentUrl } from '../../repositories/repository'
import './ContentCardComponent.css'


export default function TvShowsCardComponents(props) {
    return (
        (props.tvList) &&
        (props.tvList.map((item, index) => {
            return (
                <div key={index} className="content-card-component">
                    <div className="card" >
                        <Link to={`/tv/${item.id}`}>
                        <img src={contentUrl + item.poster_path} alt={item.title} className="card-img-top img" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.first_air_date}</p>
                        </div>
                    </div>
                </div>
            )
        }))
    )
}





