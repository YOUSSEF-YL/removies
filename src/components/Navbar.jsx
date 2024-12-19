import React from 'react'
import '../assets/css/vapor.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        // <nav className='navbar'>
        //  <div className='navbar-brand'>
        //          <Link to='/'> REMOVIES</Link>
        //  </div>
        //  <div className='navbar-links'>
        //           <Link to='/' className='nav-link'>Home</Link>
        //           <Link to='/Favorites' className='nav-link'>Favorites</Link>
        //  </div>
        // </nav>



//============================================
<nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
<div class="container-fluid" bis_skin_checked="1">
  <a class="navbar-brand" href="/">REMOVIES</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor03" bis_skin_checked="1">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <a class="nav-link active" href="/">Home
          <span class="visually-hidden">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Favorites">Favorites</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Genres </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">TV Shows</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> Top Rated</a>
      </li>
   
    </ul>
    <a class="nav-link" href="#">  </a>
  </div>
</div>
</nav>


       )
}

export default Navbar
