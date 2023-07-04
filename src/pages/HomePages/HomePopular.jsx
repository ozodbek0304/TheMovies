import React, { useEffect, useState } from 'react'
import movie from '../../repositories/movie'
import { contentUrl } from '../../repositories/repository'
import { Link } from 'react-router-dom'
import "../HomePages/HomeTrend.css"
import { useDispatch } from 'react-redux'
import { addItem } from '../../Store'
import iconka from "../../assets/logos/iconka.svg"
import { addItemWatching } from '../../Store/indexWatching'



const HomePoplular = () => {

  const [popularMovieList, setPopularMovieList] = useState([]);
  const [loading, setLoading] = useState(false);


  const [type, setType] = useState('day')

  const dispatch = useDispatch();

  function handleClick(product) {
    dispatch(addItem(product))
  }

  function handleClickWatching(product){
    dispatch(addItemWatching(product))

  }


  async function getTrendingMovie() {
    setLoading(true)
    const currentTrendingMovies = await movie.getTrendingMovie(type)
    setPopularMovieList(currentTrendingMovies);
    setLoading(false)
  }

  useEffect(() => {
    getTrendingMovie()
  }, [type])

  return (
    <div>
      <div className='d-flex my-4 gap-4 container '>
        <h2 >What's Popular</h2>
        <div className='buuttonBorder '>
          <button onClick={() => setType('day')} className={`buttonday ${type == 'day' && 'active_btn'}`}><span>On TV</span></button>
          <button onClick={() => setType('week')} className={`buttonday1 ${type == 'week' && 'active_btn'}`}><span>In Theaters</span></button>
        </div>
      </div>
  { 
  (loading)?
  (
    <div className=' min-vh1-100 text-center text-white'>
    <h1 className='display-1 '>LOADING..</h1>
  </div>
  ):
  (<div className='scroll'>
        <div className='d-flex treyding gap-4'>
          {(popularMovieList) &&
            (popularMovieList.map((item, index) => {
              return (
                <div key={index} className="content-card-component">
                  <div className={`dropdown `}>
                    <div className='iconkaImg' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={iconka} alt="" className={`iconka } `} />
                    </div>
                    <ul className="dropdown-menu px-2 ">
                      <li className='py-1'><Link className="dropdown-item " > <i className="fa-solid  fa-list mx-1"></i> Add to list</Link></li>
                      <li className='py-1'><Link onClick={() => handleClick(item)} className="dropdown-item " >  <i className="fa-solid  fa-heart mx-1 fs-6"></i> Favorite</Link></li>
                      <li className='py-1'><Link onClick={()=>handleClickWatching(item)}  className="dropdown-item " > <i className="fa-solid  fa-bookmark mx-1"></i> Watchlist</Link></li>
                      <li className='py-1'><Link className="dropdown-item " > <i className="fa-solid  fa-star "></i> Your rating</Link></li>
                    </ul>
                  </div>
                  <Link to={`/details/${item.id}`} className="cardScroll text-reset text-decoration-none" >
                    <div className='divImg'>
                      <img src={contentUrl + item.backdrop_path} alt={item.title} className="img rounded" />
                    </div>
                  </Link>

                  <h5 className="card_text">{item.title}</h5>
                  <p className="card_text">{item.release_date
                  }
                  </p>
                  <p className="card_text">{item.first_air_date
                  }
                  </p>
                </div>
              )
            }))
          }
        </div>
      </div>)}
    </div>

  )
}

export default HomePoplular
