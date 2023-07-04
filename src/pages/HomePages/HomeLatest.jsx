import React, { useEffect, useState } from 'react'
import movie from '../../repositories/movie'
import { contentUrl } from '../../repositories/repository'
import { Link } from 'react-router-dom'
import "./HomeTrend.css"
import { useDispatch } from 'react-redux'
import { addItem } from '../../Store'
import iconka from "../../assets/logos/iconka.svg"


const HomePoplular = () => {

  const [popularMovieList, setPopularMovieList] = useState([]);
  const [type, setType] = useState('day')

  const dispatch = useDispatch();

  function handleClick(product) {
    dispatch(addItem(product))
  }

  async function getTrendingMovie() {
    const currentTrendingMovies = await movie.getTrendingMovie(type)
    setPopularMovieList(currentTrendingMovies);
  }

  useEffect(() => {
    getTrendingMovie()
  }, [type])

  return (
    <div className='homelatestImg'>
      <div className='d-flex my-4 gap-4 container pt-4'>
        <h2 className='text-white' >Latest Trailers</h2>
        <div className='buuttonBorder'>
          <button onClick={() => setType('day')} className={`buttonday ${type == 'day' && 'active_btn'}`}><span>On TV</span></button>
          <button onClick={() => setType('week')} className={`buttonday1 ${type == 'week' && 'active_btn'}`}><span>In Theaters</span></button>
        </div>
      </div>
      <div className='scroll'>
        <div className='d-flex treydingImg gap-4'>
          {(popularMovieList) &&
            (popularMovieList.map((item, index) => {
              return (
                <div key={index} className="content-card-component">

                  <div className='divImg'>
                    <Link to={`/details/${item.id}`} className="card cardScroll" >
                      <img src={contentUrl + item.backdrop_path} alt={item.title} className="card-img-top img rounded" />
                    </Link>
                  </div>
                  <div className={`dropdown `}>
                    <div className='iconkaImgLas' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={iconka} alt="" className={`iconkaLas } `} />
                    </div>
                    <ul className="dropdown-menu px-2 ">
                      <li className='py-1'><Link className="dropdown-item " > <i className="fa-solid  fa-list mx-1"></i> Add to list</Link></li>
                      <li className='py-1'><Link onClick={() => handleClick(item)} className="dropdown-item " >  <i className="fa-solid  fa-heart mx-1 fs-6"></i> Favorite</Link></li>
                      <li className='py-1'><Link className="dropdown-item " > <i className="fa-solid  fa-bookmark mx-1"></i> Watchlist</Link></li>
                      <li className='py-1'><Link className="dropdown-item " > <i className="fa-solid  fa-star "></i> Your rating</Link></li>
                    </ul>
                  </div>
                  <h5 className="card_text">{item.title}</h5>
                  <p className="card_text">{item.release_date
                  } 
                  </p>
                </div>
              )
            }))
          }
        </div>
      </div>
    </div>

  )
}

export default HomePoplular
