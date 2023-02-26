import React ,{useState} from 'react'
import Firstcontainerimg from './Image/firstcontainerimg.png'

import './Firstcontainer.css'
import { NavLink } from 'react-router-dom'

const Firstcontainer = () => {
  const [scrolled, setScrolled] = useState(true)


  const Navbarchange = () => {
    if (window.scrollY >= 500) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', Navbarchange)
  return (
    <>
     
      <div className='container-fluid p-0 m-0'>
       
      <a href='#'><button className={scrolled ? 'bi bi-arrow-up text-danger w-25 btn btn-circle fs-1  fixed-bottom ms-auto':'    btnNone fixed-bottom ms-auto'}></button></a>
 
        <div class="position-relative">
          <div className='bgimage'></div>
          <div class="position-absolute top-50 start-50 translate-middle text-white">
            <div className='text-center'>
              <h1 className='m-b-20'>
                <strong>
                  Your customers will love you
                  "one minute from now."
                </strong>
              </h1>
            </div>
            <div className='text-center'>
              <p>
                See how your users experience your website in realtime or view
                trends to see any changes in performance over time.
              </p>
            </div>
            <div className='row   justify-content-center  '>
              <div className='col-12 col-md-5 col-sm-6'>
                <div className='text-center'>
                  <NavLink to="/Aboutus" className='btn btn-outline-warning rounded-pill  m-2  px-5 py-3'>About US</NavLink>
                  <button className='btn btn-outline-primary m-2   px-5 py-3 rounded-pill'>Learn more</button>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className='row' style={{ margin: '4rem' }}>
          <div className='text-center'>
            <h1 className='m-2'>Your Site, Your Way.</h1>
            <p className='m-2 p-4'>See how your users experience your website in realtime or view<br></br>trends to see any changes in performance over time.</p>
          </div>
          <div>
            <img src={Firstcontainerimg} className="w-100"></img>
          </div>
        </div>
        <div className='row m-5'>
          <div className='col-12 col-md-3 col-sm-6 text-center'>
            <div className='icons'>
              <span className='bi bi-layout-split'> </span>
            </div>
            <h6>Visual Composer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
            </p>
          </div>
          <div className='col-12 col-md-3 col-sm-6  text-center'>
            <div className='icons'>
              <span className='bi bi-trophy  '> </span>
            </div>
            <h6>Visual Composer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
            </p>
          </div>
          <div className='col-12 col-md-3 col-sm-6  text-center'>
            <div className='icons'>
              <span className='bi bi-hdd '> </span>

            </div>
            <h6>Visual Composer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
            </p>
          </div>
          <div className='col-12 col-md-3 col-sm-6  text-center'>
            <div className='icons'>

              <span className='bi bi-link  '> </span>
            </div>
            <h6>Visual Composer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
            </p>
          </div>
        </div>
      </div>

      <hr />
 
    </>
  )
}

export default Firstcontainer