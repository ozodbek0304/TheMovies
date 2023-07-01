import React from 'react'
import { Link } from "react-router-dom"
import { contentUrl } from '../../repositories/repository'
import './ContentCardComponent.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../../Store';


export default function TvShowsCardComponents(props) {

    const dispatch = useDispatch();

    function handleClick(product) {
     dispatch(addItem(product))
   }
 
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
                            <p className="card-text">{item.first_air_date}
                            <Link className='text-danger' onClick={() => handleClick(item)} >
                                    <i className="fa-solid fa-heart mx-3"></i>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )
        }))
    )
}





