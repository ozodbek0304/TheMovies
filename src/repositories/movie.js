import repository, {baseUrl, bearerToken} from './repository'

class Movie {
    async getMoviesByName(name) {
        const endPoint = `movie/${name}`
        
        const movies = await repository.get(baseUrl + endPoint, {
            headers: {
                accept: 'application/json',
                Authorization: bearerToken
            }
        })
        .then(ress => {
            return ress.data
        })
        .catch(err => {
            console.log(err);
        })

        return movies
    }
    
    async getTrendingMovie(type) {
        const endPoint = `trending/movie/${type}`
        const trendingMovie = await repository.get(baseUrl + endPoint, {
            headers: {
                accept: 'application/json',
                Authorization: bearerToken
            }
        })
        .then(ress => {
            return ress.data.results
        })
        .catch(err => {
            console.log(err);
        })

        return trendingMovie
    }

    async getTrendingMovieDetails(id) {
        const endPoint = `movie/${id}`
        const trendingMovieDetails = await repository.get(baseUrl + endPoint, {
            headers: {
                accept: 'application/json',
                Authorization: bearerToken
            }
        })
        .then(ress => {
            return ress.data
        })
        .catch(err => {
            console.log(err);
        })

        return trendingMovieDetails
    }
    async getMoviesByNamePerson(name) {
        const endPoint = `person/${name}`
        
        const person = await repository.get(baseUrl + endPoint, {
            headers: {
                accept: 'application/json',
                Authorization: bearerToken
            }
        })
        .then(ress => {
            return ress.data
        })
        .catch(err => {
            console.log(err);
        })

        return person
    }

    async getMoviesByNameTvShows(name) {
        const endPoint = `tv/${name}`
        
        const tvshows = await repository.get(baseUrl + endPoint, {
            headers: {
                accept: 'application/json',
                Authorization: bearerToken
            }
        })
        .then(ress => {
            return  console.log( ress.data);
        })
        .catch(err => {
            console.log(err);
        })

        return tvshows
    }

    async getSerachByValue(name){
        const endPoint=`search/multi?query=${name}`
          
        const searchVal = await repository.get(baseUrl + endPoint, {
            headers: {
                accept: 'application/json',
                Authorization: bearerToken
            }
        })
        .then(ress => {
            return ress.data
        })
        .catch(err => {
            console.log(err);
        })

        return searchVal

    }
}


export default new Movie() 