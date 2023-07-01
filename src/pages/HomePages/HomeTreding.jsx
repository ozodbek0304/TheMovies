import React, { useEffect, useState } from 'react'
import movie from '../../repositories/movie'
import { contentUrl } from '../../repositories/repository'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../../Store/index'
import "../HomePages/HomeTrend.css"



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
                  <div className='divImg'>
                    <Link to={`/details/${item.id}`} className="cardScroll text-reset  text-decoration-none"  >
                      <img src={contentUrl + item.backdrop_path} alt={item.title} className=" img rounded" />
                      <button  className='hov'>...</button>
                    </Link>
                  </div>
                  <h5 className="card_text">{item.title}</h5>
                  <p className="card_text">{item.release_date
                  }
                    <Link className='text-danger' onClick={() => handleClick(item)} >
                      <i className="fa-solid fa-heart mx-3"></i>
                    </Link>
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
