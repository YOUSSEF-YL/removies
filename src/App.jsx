import './assets/css/App.css'
import Home from './pages/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import TvSerieDetails from './pages/TvSerieDetails'
import MoviesDetails from './pages/MoviesDetails'
import Genres from './pages/Genres'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TvSeries from './pages/tvSeries'
import { MovieProvider } from "./contexts/MovieContext";
import './assets/css/Home.css'


function App() {
  

  return (
    
    <MovieProvider>
    <Navbar />
    
    <main className="main-content">
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} /> 
        <Route path="/tvSeries" element={<TvSeries />} />
        <Route path="/TvSerieDetails" element={<TvSerieDetails />} /> 
        <Route path="/MoviesDetails" element={<MoviesDetails />} />
        <Route path="/Genres" element={<Genres />} />    
        
      </Routes>
    </main>
    <Footer/ >
  </MovieProvider>
    
  )
}

export default App
