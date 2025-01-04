import React from 'react'

import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import FooterG from './Footer_Section';
import { getGenre } from "../services/Api";


const Footer = () => {



   
  return (
   // class="navbar navbar-expand-lg bg-light" data-bs-theme="light"
      



  <footer class="row row-cols-5 py-5 my-5    border-secondary ">
    <div class="col">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      </a>
   
    </div>

    <div class="col">

    </div>

    <div class="col">
      <h5>Section</h5>

<div class="col"></div>
<ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
      </ul>
</div>

    <div class="col">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
      </ul>
    </div>

    <div class="col">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">.</a></li>
      </ul>
    </div>
  </footer>


  )
}

export default Footer
