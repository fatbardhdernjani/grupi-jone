import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider() {
  return (
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://i0.wp.com/maxblizz.com/wp-content/uploads/2023/06/save-1.png?resize=800%2C300&ssl=1" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://wonder.ph/wp-content/uploads/2024/01/2024-Movie-and-Series-Releases-to-Look-Forward-To-Intl_1200x628-800x300.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://www.emagine-entertainment.com/wp-content/uploads/2024/01/0100_WinterKidsSeries_Overview_Website-800x300-1-1.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Slider