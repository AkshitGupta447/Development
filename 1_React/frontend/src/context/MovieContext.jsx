import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext() // Global State Manager for Favorite_Movies

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    // Load
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites") // 1. Look in the hard drive
        if (storedFavs) setFavorites(JSON.parse(storedFavs)) // 2. If something is there, put it in the bucket
    }, []) // 3. The empty [] means "Only do this when the app first opens"

    // Save
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites)) // 1. Write the bucket to the hard drive
    }, [favorites]) // 2. The [favorites] means "Do this every time the favorites list changes"


    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}