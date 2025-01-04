import React from 'react'
import { getGenre } from "../services/Api";

function Footer_Section(genre) {
  return (
  
    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">{genre.id}</a></li>

  )
}

export default Footer_Section
