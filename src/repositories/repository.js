import Axios from 'axios'

export const baseUrl = 'https://api.themoviedb.org/3/'
export const contentUrl = "https://image.tmdb.org/t/p/w500"
export const bearerToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzA0NzY1Njk2NjRmZWIyODFmMTI5MjYyMTRhNWRjZSIsInN1YiI6IjYzZjhkMWQ5NjhiMWVhMDA4NjY5OGExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aWBPSjJ-irqpAdK_vtVUGYN3ld4UzNleEnqP9U-Dhss"

const client = Axios.create({
    baseUrl: baseUrl,
})

export default client