import React from 'react'

import { Link } from 'react-router-dom'
import { getGenre} from "../services/Api";




const Navbar = () => {




  
    return (

<nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
<div class="container-fluid" bis_skin_checked="1">

  <Link  class="navbar-brand" to="/">REMOVIES</Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor03" bis_skin_checked="1">
    <ul class="navbar-nav me-auto">
      <li class="nav-item">
        
        <Link  class="nav-link active" to="/">Home</Link>
      </li>
      <li class="nav-item">
        
        <Link  class="nav-link  " to="/Favorites">Favorites</Link>
      </li>
      <li class="nav-item">

        <Link  class="nav-link  " to="/Genres">Genres</Link>
      </li>
      <li class="nav-item">
        
        <Link  class="nav-link  " to="/tvSeries">TV Shows</Link>
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
