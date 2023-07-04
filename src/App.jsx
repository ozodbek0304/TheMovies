import {Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import Layout from "./pages/HomeNavbar/Layout";
import MoviePage from "./pages/movie/movie.page";
import TvShows from './pages/tvshows/TvShows';
import PopularPeople from './pages/people/PopularPeople';
import HomeLayout from './pages/HomePages/HomeLayout';
import HomeDetails from './pages/HomeDetails/HomeDetails';
import NavbarDetails from './pages/HomeDetails/NavbarDetails';
import TvShowsDetails from './pages/HomeDetails/TvShowsDetails';
import PeopleDetails from './pages/HomeDetails/PeopleDetails';
import SearchDetails from './pages/HomeDetails/SearchDetails';
import { store } from './App/Store';
import ShoppingStore from './pages/HomeDetails/ShoppingStore';
import ShoppingWatching from './pages/HomeDetails/ShoppingWatching';
function App() {

  return (
    <Provider store={store}>
    <Routes>
    <Route  path='/' element={<Layout/>}>
    <Route path='/moviesPage/:title' element={<MoviePage/>}/>
    <Route path='/TvShows/:title' element={<TvShows/>}/>
    <Route path='/Person/:title' element={<PopularPeople/>}/>
    <Route path='details/:id' element={<HomeDetails/>}/>
    <Route path='movie/:id' element={<NavbarDetails/>}/>
    <Route path='tv/:id' element={<TvShowsDetails/>}/>
    <Route path='search/:title' element={<SearchDetails/>}/>
    <Route path='peopledetails/:id' element={<PeopleDetails/>}/>
    <Route path='/store' element={<ShoppingStore/>}/>
    <Route path='/watching' element={<ShoppingWatching/>}/>
    <Route path='/' element={<HomeLayout/>}>
    </Route>
    </Route>
    </Routes>
    </Provider>
  )
}

export default App
