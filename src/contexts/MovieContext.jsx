import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
         // locking for fv movies
        const Fr_list = localStorage.getItem("favorites")
         // store fv_movies in the list
        if (Fr_list) setFavorites(JSON.parse(Fr_list))
    }, [])

// if fV_state changes update the localStorage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))

    }, [favorites])

    // Add a movie from  the Favorites_list
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }
 // Remove a movie from  the Favorites_list
    const favoritesRemover = (id) => {
        setFavorites(prev => prev.filter(movie => movie.id !== id))
    }

     // check if the id is in the Favorites_list
    const isOnFavorites = (id) => {
        return favorites.some(movie => movie.id === id)
    }
    // passing the value to M_ContextProvider
    const value = {
        favorites,addToFavorites,favoritesRemover, isOnFavorites
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}