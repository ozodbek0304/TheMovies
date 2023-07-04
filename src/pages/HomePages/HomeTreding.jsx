import React, { useEffect, useState } from 'react'
import movie from '../../repositories/movie'
import { contentUrl } from '../../repositories/repository'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../../Store/index'
import "../HomePages/HomeTrend.css"
import iconka from "../../assets/logos/iconka.svg"



const HomeTreding = () => {

  const [trendingMovieList, setTrendMovieList] = useState([]);
  const [type, setType] = useState('day')


  const dispatch = useDispatch();

  function handleClick(product) {
    dispatch(addItem(product))
  }

  async function getTrendingMovie() {
    const currentTrendingMovies = await movie.getTrendingMovie(type)
    setTrendMovieList(currentTrendingMovies);
  }


  useEffect(() => {
    getTrendingMovie()
  }, [type])

  return (
    <div>

      <div className='d-flex my-4 gap-4 container '>
        <h2 >Trending</h2>
        <div className='buuttonBorder '>
          <button onClick={() => setType('day')} className={`buttonday ${type == 'day' && 'active_btn'}`}><span>Today</span></button>
          <button onClick={() => setType('week')} className={`buttonday1 ${type == 'week' && 'active_btn'}`}><span>This Week</span></button>
        </div>
      </div>
      <div className='scroll'>
        <div className='d-flex treyding gap-4'>
          {(trendingMovieList) &&
            (trendingMovieList.map((item, index) => {
              return (
                <div className="content-card-component" key={index}>
                  <div className={`dropdown `}>
                    <div  className='iconkaImg' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img   src={iconka} alt="" className={`iconka } `} />
                    </div>
                    <ul className="dropdown-menu px-2 ">
                      <li className='py-1'><Link className="dropdown-item " > <i className="fa-solid  fa-list mx-1"></i> Add to list</Link></li>
                      <li className='py-1'><Link  onClick={() => handleClick(item)}  className="dropdown-item " >  <i className="fa-solid  fa-heart mx-1 fs-6"></i> Favorite</Link></li>
                      <li className='py-1'><Link className="dropdown-item " > <i className="fa-solid  fa-bookmark mx-1"></i> Watchlist</Link></li>
                      <li className='py-1'><Link className="dropdown-item " > <i className="fa-solid  fa-star "></i> Your rating</Link></li>
                    </ul>
                  </div>
                  <div className='divImg'>
                    <Link to={`/details/${item.id}`} className="cardScroll text-reset  text-decoration-none"  >
                      <img src={contentUrl + item.backdrop_path} alt={item.title} className=" img rounded" />
                    </Link>
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

export default HomeTreding
