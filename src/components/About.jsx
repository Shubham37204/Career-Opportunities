import React from 'react'
import Navbar from '../Resue/Navbar'
import "../css/About.css"
import p4 from '../image/p4.png'
import c1 from '../image/c1.png'
import c2 from '../image/c2.png'
import c3 from '../image/c3.png'
import c4 from '../image/c4.png'
import c5 from '../image/c5.png'
import c6 from '../image/c6.png'

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="color">
        <div className="container">
          <div className="row roow">
            <h2>ABOUT US</h2>
            <p>As a result of our philosophy to be the most forward thinking company and our focus on understanding customer needs, we have and will continue to expand across the UK with franchises in the southwest of England to the north east of Scotland with over 50 territories nationwide.</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col saathi">
            <h2 className='h2'>TURN YOUR IDEAS TO LIVE WEB EXPERIENCES</h2>
            <p className='p'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident
            </p>
            <button type="button" class="btn btn-primary neela">
              Primary
            </button>
          </div>
          <div class="col  backk">
            <img src={p4} alt="" className="picture" />
          </div>
        </div>
      </div>

      <div className="silver">
        <div className="container">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <h3 className='number'>2020</h3>
                <div class="card-body">
                  <h5 class="card-title">Our First Big Project</h5>
                  <p class="card-text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card"><h3 className='number'>2020</h3>
                <div class="card-body">
                  <h5 class="card-title">Franchising Concept</h5>
                  <p class="card-text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card"><h3 className='number'>2020</h3>
                <div class="card-body">
                  <h5 class="card-title">Marketing Strategy</h5>
                  <p class="card-text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card"><h3 className='number'>2020</h3>
                <div class="card-body">
                  <h5 class="card-title">Consumer Research</h5>
                  <p class="card-text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center toop">
        <div class="row">
          <h4 className='h4'><b>COMPLETE BUILDING</b> SERVICES</h4>
          <div class="col aside">
            <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "200px", height: "200px;" }}>
              <h1 class="text-white">35m+</h1>
            </div>
            <div className='imp'>
              Square feet managed</div>
          </div>
          <div class="col aside">
            <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "200px", height: "200px;" }}>
              <h1 class="text-white">158</h1>
            </div>
            <div className='imp'>Employees on our team</div>
          </div>
          <div class="col aside">
            <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "200px", height: "200px;" }}>
              <h1 class="text-white">250+</h1>
            </div> <div className='imp'> Happy Clients</div>
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


      {/* below part is not completed yet */}
      {/* <div className="background-Image" >
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h2 className="h2">FLEXIBLE & RELIABLE SOFTWARE</h2>
              <p className="p">Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read.</p>
            </div>
            <div class="col">
              <button type="button" class="btn btn-primary up neela">Primary</button>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default About
