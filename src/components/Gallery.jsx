import React from 'react'
import "../css/Gallery.css"
import Navbar from '../Resue/Navbar'
import g1 from "../image/g1.jpeg"
import g2 from '../image/g2.jpg'
import g3 from '../image/g3.jpg'
import g4 from '../image/g4.jpg'
import g5 from '../image/g5.jpeg'
import g6 from '../image/g6.jpg'
import g7 from '../image/g7.jpg'
import g8 from '../image/g8.jpg'
import g9 from '../image/g9.jpg'
import c1 from '../image/c1.png'
import c2 from '../image/c2.png'
import c3 from '../image/c3.png'
import c4 from '../image/c4.png'
import c5 from '../image/c5.png'
import c6 from '../image/c6.png'

const Gallery = () => {
  return (
    <div>
      <Navbar />

      <div className="color1">
        <div className="container">
          <div className="row">
            <h2>OUR LATEST PROJECTS</h2>
            <p>As a result of our philosophy to be the most forward thinking company and our focus on understanding customer needs, we have and will continue to expand across the UK with franchises in the southwest of England to the north east of Scotland with over 50 territories nationwide.</p>
          </div>
        </div>
      </div>

      <div class="container text-center toop1">
        <div class="row">
          <h4 className='h4'><b>COMPLETE BUILDING</b> SERVICES</h4>
          <div class="col aside1">
            <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "200px", height: "200px;" }}>
              <h1 class="text-white">35m+</h1>
            </div>
            <div className='imp1'>
              Square feet managed</div>
          </div>
          <div class="col aside1">
            <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "200px", height: "200px;" }}>
              <h1 class="text-white">158</h1>
            </div>
            <div className='imp1'>Employees on our team</div>
          </div>
          <div class="col aside1">
            <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "200px", height: "200px;" }}>
              <h1 class="text-white">250+</h1>
            </div> <div className='imp1'> Happy Clients</div>
          </div>
        </div>
      </div>

      <div className="container">
        <h4 className='h41'>BUILD GREAT PRODUCTS</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card high ">
              <img src={g1} class="card-img-top picture2" alt={g1} />
            </div>
          </div>
          <div class="col">
            <div class="card high">
              <img src={g2} class="card-img-top picture2" alt={g2} />
            </div>
          </div>
          <div class="col">
            <div class="card high">
              <img src={g3} class="card-img-top picture2" alt={g3} />
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card high">
              <img src={g4} class="card-img-top picture2" alt={g4} />
            </div>
          </div>
          <div class="col">
            <div class="card high">
              <img src={g5} class="card-img-top picture2" alt={g5} />
            </div>
          </div>
          <div class="col">
            <div class="card high">
              <img src={g6} class="card-img-top picture2" alt={g6} />
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 ">
          <div class="col">
            <div class="card high">
              <img src={g7} class="card-img-top picture2" alt={g7} />
            </div>
          </div>
          <div class="col">
            <div class="card high">
              <img src={g8} class="card-img-top picture2" alt={g8} />
            </div>
          </div>
          <div class="col">
            <div class="card high">
              <img src={g9} class="card-img-top picture2" alt={g9} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h4 className='h41'><b> WE LOVE TO WORK</b>WITH OUR PARTNERS</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src={c1} class="card-img-top picture1" alt={c1} />
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={c2} class="card-img-top picture1" alt={c2} />
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={c3} class="card-img-top picture1" alt={c3} />
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src={c4} class="card-img-top picture1" alt={c4} />
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={c5} class="card-img-top picture1" alt={c5} />
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={c6} class="card-img-top picture1" alt={c6} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Gallery
