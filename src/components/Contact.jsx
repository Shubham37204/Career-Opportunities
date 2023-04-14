import React from 'react'
import "../css/Contact.css"
import Navbar from "../Resue/Navbar"
import p5 from '../image/p5.png'
import p1 from '../image/p1.png'

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div className="color">
        <div className="container">
          <div className="row">
            <h2>CONTACT US</h2>
            <p>As a result of our philosophy to be the most forward thinking company and our focus on understanding customer needs, we have and will continue to expand across the UK with franchises in the southwest of England to the north east of Scotland with over 50 territories nationwide.</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col big">
            <img src={p5} alt="" className="picture" />
          </div>
          <div class="col">
            <img src={p1} alt="" className='chitra' />
            <h2 className='h22'>CONTACT INFO</h2>
            <p className='p'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident
            </p>
            <span>+1(234)567-8910</span>
            <button type="button" class="btn btn-primary neel">
              Primary
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className='h23'><b>INTERESTED IN </b>WORKING WITH US?</h2>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Last Name</label>
            <input type="name" class="form-control" id="inputEmail4" placeholder='enter your last name' />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">First Name</label>
            <input type="name" class="form-control" id="inputEmail4" placeholder='enter your first name' />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Phone</label>
            <input type="phone" class="form-control" id="inputEmail4" placeholder='enter ypur phone' />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder='enter ypur email' />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="naya">Sign in</button>
          </div>
        </form>
      </div>

    </div >
  )
}

export default Contact
