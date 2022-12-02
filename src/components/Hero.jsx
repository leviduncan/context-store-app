import React from 'react'
import laptop from '../assets/laptop-v1.jpg'
import lumix from '../assets/lumix-camera-v2.jpg'
import xbox from '../assets/xbox-game-controller-v1.jpg'

function Hero() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={laptop} className="d-block w-100" alt="Laptop" />
                </div>
                <div className="carousel-item">
                    <img src={lumix} className="d-block w-100" alt="Lumix-camera" />
                </div>
                <div className="carousel-item">
                    <img src={xbox} className="d-block w-100" alt="xbox-game-controller-v1" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Hero