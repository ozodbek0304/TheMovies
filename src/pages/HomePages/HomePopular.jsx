import React, { useEffect, useState } from 'react'
import movie from '../../repositories/movie'
import { contentUrl } from '../../repositories/repository'
import { Link } from 'react-router-dom'
import "../HomePages/HomeTrend.css"
import { useDispatch } from 'react-redux'
import { addItem } from '../../Store'



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
    <div>
      <div className='d-flex my-4 gap-4 container '>
        <h2 >What's Popular</h2>
        <div className='buuttonBorder '>
          <button onClick={() => setType('day')} className={`buttonday ${type == 'day' && 'active_btn'}`}><span>On TV</span></button>
          <button onClick={() => setType('week')} className={`buttonday1 ${type == 'week' && 'active_btn'}`}><span>In Theaters</span></button>
        </div>
      </div>
      <div className='scroll'>
        <div className='d-flex treyding gap-4'>
          {(popularMovieList) &&
            (popularMovieList.map((item, index) => {
              return (
                <div  key={index} className="content-card-component">
                    <Link to={`/details/${item.id}`} className="cardScroll text-reset text-decoration-none" >
                    <div className='divImg'>
                      <img src={contentUrl + item.backdrop_path} alt={item.title} className="img rounded" />
                    </div>
                </Link>

                    <h5 className="card_text">{item.title}</h5>
                    <p className="card_text">{item.release_date
                    }
                      <Link className='text-danger' onClick={() => handleClick(item)} >
                        <i className="fa-solid fa-heart mx-3"></i>
                      </Link>
                    </p>
                    <p className="card_text">{item.first_air_date
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
