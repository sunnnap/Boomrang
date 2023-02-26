import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='container' style={{marginTop:"5rem"}}> 
    <section class="contact-sec sec-pad">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="contact-detail">
          <h1 class="section-title">Contact us</h1>

          <ul class="contact-ul">
            <li><i class="fa fa-location-dot"></i> 97 ,daulatpur sonkatch</li>

            <li>
             <span className='bi bi-phone'></span>
              <a href="tel:08510004495"><b>0255000XXXX</b></a>,
              <a href="tel:08510005495"><b>0251600XXXX</b></a>
            </li>

            <li>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:pardeepkumar4bjp@gmail.com"><b>@surendrapatidar.com</b></a>
            </li>
          </ul>

          <span>
            <a href="#" class="fb"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="insta"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
          </span>
        </div>
      </div>

      <div class="col-md-6">
        <form action="#" class="contFrm" method="POST">
          <div class="row">
            <div class="col-sm-6">
              <input type="text" name="name" placeholder="Your Name" class="inptFld" required />
            </div>

            <div class="col-sm-6">
              <input type="email" name="email" placeholder="Email Address" class="inptFld" required />
            </div>

            <div class="col-sm-6">
              <input type="tel" name="phone" placeholder="Phone Number" class="inptFld" required />
            </div>

            <div class="col-sm-6">
              <input type="text" name="sub" placeholder="Subject" class="inptFld" required />
            </div>

            <div class="col-12">
              <textarea class="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
            </div>

            <div class="col-12">
           <button  className="btn btn-success w-100">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div style={{textalign: "center" ,margintop: "20px"}}>
      <p> Copyright &copy;
     2023
        All rights reserved | surendra ("SUNNA") patidar
      </p>
    </div>

  </div>
</section>
    </div>
  )
}

export default Contact