import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return ( 
    <div>
    {/* <nav class="navbar navbar-dark bg-dark "> */}
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand fs-0.1 fst-italic"  to="/">Go-Food</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Signup">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Profile">Profile</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#" tabindex="0">About</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>    </div>
  )
}
