import React from 'react'
import Navbar from "../Resue/Navbar"
import "../css/Team.css"
import t1 from '../image/t1.jpg'
import t2 from '../image/t2.jpg'
import t3 from '../image/t3.jpg'
import t4 from '../image/t4.jpg'
import t5 from '../image/t5.jpg'

const Team = () => {
  return (
    <div>
      <Navbar />

      <div className="color2">
        <div className="container">
          <div className="row">
            <h2>OUR TEAM</h2>
            <p>As a result of our philosophy to be the most forward thinking company and our focus on understanding customer needs, we have and will continue to expand across the UK with franchises in the southwest of England to the north east of Scotland with over 50 territories nationwide.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card ">
              <img src={t1} class="card-img-top" alt={t1} />
              <div class="card-body">
                <h5 class="card-title">Nicole Stone</h5>
                <p class="card-text">Lead Designer</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card ">
              <img src={t2} class="card-img-top " alt={t2} />
              <div class="card-body">
                <h5 class="card-title">Mike Perry</h5>
                <p class="card-text">Senior Developer</p>
              </div>
            </div>
          </div> <div class="col">
            <div class="card ">
              <img src={t3} class="card-img-top " alt={t3} />
              <div class="card-body">
                <h5 class="card-title">Natasha Ivanova</h5>
                <p class="card-text">TPhotographer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card ">
              <img src={t4} class="card-img-top " alt={t4} />
              <div class="card-body">
                <h5 class="card-title">Steve Hudson</h5>
                <p class="card-text">SEO</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card ">
              <img src={t5} class="card-img-top " alt={t5} />
              <div class="card-body">
                <h5 class="card-title">Mary Larson</h5>
                <p class="card-text">Lead Designer</p>
              </div>
            </div>
          </div> <div class="col">
            <div class="card ">
              <div class="card-body">
                <p class="card-text">While we were not the first home cleaning company in the UK, we take pride in being market leaders in introducing an instant online booking system plus the facility for our customers to login and control their cleaning service 24/7, 365 days a year putting you in complete control. </p>
              </div>
              <button type="button" class="btn btn-info">Info</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Team
