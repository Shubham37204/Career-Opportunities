import React from "react";
import Navbar from "../Resue/Navbar";
import p2 from "../image/p2.png";
import p3 from "../image/p3.jpg";
import "../css/Home.css"

const Home = () => {
  return (
    <div>
      <Navbar />

      <div class="container-fluid pic">
        <div className="row">
          <div className="box">
            <h1>WORKS FOR YOU, EVEN WHEN YOU AREN'T WORKING</h1>
            <p className="shubham">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </p>
            <button type="button" class="btn btn-primary">
              Primary
            </button>
            <button type="button" class="btn btn-dark">
              Dark
            </button>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col Saath">
            <h2 className="saathi">TURN YOUR IDEAS TO LIVE WEB EXPERIENCES</h2>
            <p className="shubham raman">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident
            </p>
            <button type="button" class="btn btn-primary neela">
              Primary
            </button>
          </div>
          <div class="col  back">
            <img src={p2} alt="" className="picture" />
          </div>
        </div>
      </div>

      <div className="silver">
        <div class="container">
          <h3 className="service">SERVICES WE ARE OFFERING</h3>
          <p className="shubham1">
            We develop an individual integrated solution for your business and<br />
            select a unique set of services for it, combining them with a single<br />
            strategy and goal
          </p>
          <div class="extra">
            <div class="row row-cols-1 row-cols-md-3 g-4 ">
              <div class="col">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Great Experiences</h5>
                    <p class="card-text">
                      Great Experiences Whatever the scale and nature of your
                      projects, our specialists have the skills and experience
                      necessary to successfully solve your problems.
                    </p>
                  </div>
                  <a href="#" className="More">
                    <b>READ MORE</b>
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Digital Marketing</h5>
                    <p class="card-text">
                      Digital Marketing Whatever the scale and nature of your
                      projects, our specialists have the skills and experience
                      necessary to successfully solve your problems.
                    </p>
                  </div>
                  <a href="#" className="More">
                    <b>READ MORE</b>
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Consulting Services</h5>
                    <p class="card-text">
                      Whatever the scale and nature of your projects, our
                      specialists have the skills and experience necessary to
                      successfully solve your problems.
                    </p>
                  </div>
                  <a href="#" className="More"><b>READ MORE</b></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container upper">
        <div class="row">
          <div class="col">
            <img src={p3} alt="" className="girl" />
            <p className="para">Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum.</p>
            <button type="button" class="btn btn-primary neela">
              Primary
            </button>
          </div>
          <div class="col">
            <h2 className="shubham">GET EVERY ANSWER</h2>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-image" >
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h2 className="flexible">FLEXIBLE & RELIABLE SOFTWARE</h2>
              <p className="people">Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read.</p>
            </div>
            <div class="col">
              <button type="button" class="btn btn-primary up neela">Primary</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <h2>WHAT OUR CLIENT’S SAY’S</h2>
        <div className="row">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card ">
                <div class="card-body">
                  <h5 class="card-title">Nickol Parse</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card ">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a short card.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div >
  );
};

export default Home;
