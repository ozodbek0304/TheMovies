import React from 'react'
import { Link } from 'react-router-dom'
import { contentUrl } from '../../repositories/repository'
import './ContentCardComponent.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../../Store';
import iconka from "../../assets/logos/iconka.svg"
import { addItemWatching } from '../../Store/indexWatching';




export default function ContentCardComponent(props) {

    const dispatch = useDispatch();

    function handleClick(product) {
        dispatch(addItem(product))
    }

    function handleClickWatching(product){
        dispatch(addItemWatching(product))
    
      }
    return (
        (props.movieList) &&
        (props.movieList.map((item, index) => {
            return (
                <div key={index} className="content-card-component">
                    <div className="card" >
                    <div className={`dropdown `}>
                    <div  className='iconkaImg' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img   src={iconka} alt="" className={`iconka } `} />
                    </div>
                    <ul className="dropdown-menu px-2 ">
                      <li className='py-1'><Link className="dropdown-item " > <i className="fa-solid  fa-list mx-1"></i> Add to list</Link></li>
                      <li className='py-1'><Link  onClick={() => handleClick(item)}  className="dropdown-item " >  <i className="fa-solid  fa-heart mx-1 fs-6"></i> Favorite</Link></li>
                      <li className='py-1'><Link  onClick={() => handleClickWatching(item)} className="dropdown-item " > <i className="fa-solid  fa-bookmark mx-1"></i> Watchlist</Link></li>
                      <li className='py-1'><Link className="dropdown-item " > <i className="fa-solid  fa-star "></i> Your rating</Link></li>
                    </ul>
                  </div>
                        <Link to={`/movie/${item.id}`}>
                            <img src={contentUrl + item.poster_path} alt={item.title} className="card-img-top img" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.release_date}
                            </p>
                        </div>
                    </div>
                </div>
            )
        }))
    )
}






