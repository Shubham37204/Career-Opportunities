import React from 'react'
import "../css/Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-lg bg-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>  <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/About">About</a>
                            </li>  <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/Gallery">Gallery</a>
                            </li>  <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/Team">Team</a>
                            </li>  <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/Contact">Contact</a>
                            </li>
                        </ul>
                        <ul className='header'>
                            <li class="nav-item pad">
                                <i class="fa-brands fa-twitter icon" style={{ color: "#2e6fe0" }}></i>
                            </li> <li class="nav-item pad">
                                <i class="fa-brands fa-instagram icon" style={{ color: " #ea394a" }}></i>
                            </li> <li class="nav-item pad">
                                <i class="fa-brands fa-facebook icon" style={{ color: "#3e70e5" }}></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
