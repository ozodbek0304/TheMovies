import {Link} from "react-router-dom"
import "../content/NavbarMovies.css"
import logo from "../../assets/logos/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c (1).svg"

const NavbarMovies = () => {

    return (
        <div className='nav shadow'>
            <div className="container1 align-items-center d-flex justify-content-between ">
                <ul className='d-flex gap-4 m-0 list-unstyled' >
                     <Link to="/">
                     <img src={logo} alt="" />
                     </Link>
                    <li className="w3-dropdown-hover w3-mobile">
                        <Link className="text-reset text-decoration-none " >Movies</Link>
                        <ul className="w3-dropdown-content w3-bar-block  w3-bar-block shadow rounded">
                            <li>
                                <Link to={`/moviesPage/popular`} className="w3-bar-item w3-button w3-mobile">Popular</Link>
                            </li>
                            <li>
                                <Link to="/moviesPage/now_playing" className="w3-bar-item w3-button w3-mobile">Now Playing</Link>
                            </li>
                            <li>
                                <Link to="/moviesPage/upcoming" className="w3-bar-item w3-button w3-mobile">Upcoming</Link>
                            </li>
                            <li>
                                <Link to="/moviesPage/top_rated" className="w3-bar-item w3-button w3-mobile">Top Rated</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="w3-dropdown-hover w3-mobile">
                        <Link className="text-reset text-decoration-none " >TV Shows</Link>
                        <ul className="w3-dropdown-content w3-bar-block  w3-bar-block shadow rounded">
                            <li>
                                <Link to="/TvShows/popular" className="w3-bar-item w3-button w3-mobile">Popular</Link>
                            </li>
                            <li>
                                <Link to="/TvShows/airing_today" className="w3-bar-item w3-button w3-mobile">Airing Today</Link>
                            </li>
                            <li>
                                <Link to="/TvShows/on_the_air" className="w3-bar-item w3-button w3-mobile">On TV</Link>
                            </li>
                            <li>
                                <Link to="/TvShows/top_rated" className="w3-bar-item w3-button w3-mobile">Top Rated</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="w3-dropdown-hover w3-mobile">
                        <Link className="text-reset text-decoration-none " >People</Link>
                        <ul className="w3-dropdown-content w3-bar-block  w3-bar-block shadow rounded">
                            <li>
                                <Link to="/Person/popular" className="w3-bar-item w3-button w3-mobile">Popular People</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className='list-unstyled  m-0 navbarUl'>
                    <li>
                        <Link className='text-reset text-decoration-none fs-5'>
                            <i className="fa-solid fa-plus "></i>
                        </Link>
                    </li>
                    <li>
                        <Link className='text-reset text-decoration-none'>
                            EN
                        </Link>
                    </li>
                    <li>
                        <Link className='text-reset text-decoration-none'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className='text-reset text-decoration-none'>
                            Join TMDB
                        </Link>
                    </li>
                    <li>
                        <Link to={"/store"} className='text-reset text-decoration-none fs-5 '>
                        <i className="fa-solid fa-cart-plus"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarMovies
