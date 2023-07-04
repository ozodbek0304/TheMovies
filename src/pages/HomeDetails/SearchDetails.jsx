import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { contentUrl } from '../../repositories/repository'
import search from '../../repositories/movie'
import "../HomeDetails/HomeDetails.css"


const SearchDetails = () => {
    const { title } = useParams();
    const [searchUser, setSearchUser] = useState([]);
  const [loading, setLoading] = useState(false);


    async function getSerachByValue(title) {
        setLoading(true)
        const currentMovies = await search.getSerachByValue(title)
        setSearchUser(currentMovies.results)
        setLoading(false)

    }

    useEffect(() => {
        getSerachByValue(title)
    }, [title])

    return (
        <div>
            {
              
              (loading)?
              (
                <div className=' min-vh1-100 text-center text-white'>
                <h1 className='display-1 '>LOADING..</h1>
              </div>
              ):
     (         (searchUser.length > 0) ?
                    (
                        <div>
                            {
                                (searchUser.map((item, index) => (
                        <Link key={index} to={item.media_type=="tv" ? `/tv/${item.id}`: `/movie/${item.id}`  } className='text-decoration-none text-reset'> 
                                                   <div className="search_card" >
                                        <div className="search_card-flexing">
                                            <div className='search_card-felxing-left'>
                                                <img className='search_card_img' src={contentUrl + item.poster_path} alt=""  />
                                            </div>
                                            <div className='search_card-felxing-right'>
                                          <h5><b>{item.title}</b></h5>
                                          <h5><b>{item.name}</b></h5>
                                          <p className='search_card-felxing-right-title'>{item.release_date}</p>
                                          <p className='search_card-felxing-right-title'>{item.first_air_date}</p>
                                          <p>{item.overview}</p>
                                            </div>
                                        </div>
                                    </div>
                        </Link>
                                )))
                            }
                        </div>
                    ) :
                    (
                        <div><h1>
                            Loading...</h1></div>
                    ))

            }
        </div>
    )
}

export default SearchDetails
