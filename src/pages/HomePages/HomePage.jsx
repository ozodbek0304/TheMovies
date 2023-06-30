import { useState } from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
const navigate=useNavigate()
const [searchValue, setSearchValue]=useState("Loading");                                                                                            

function Serach(){
    navigate(`search/${searchValue}`)
}

    return (
        <div>
            <div className='backgroundImg  text-white pt-5 '>
                <div className='boxs'>
                    <h2 className='welcome'>Welcome.</h2>
                    <h3 className=' shows'>Millions of movies, TV shows and poeple to discover. Explore now.</h3>
                    <form>
                        <label htmlFor="search"></label>
                        <input onInput={(e)=>setSearchValue(e.target.value)} type="search" id='search' name='search' className='form-control rounded-5 px-4' placeholder='Search for a movie, tv show, person...' />
                        <button onClick={Serach} className='button  rounded-5 btn'>
                           <span> Search</span>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default HomePage
