
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { useCookies }from 'react-cookie'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react'
import App from '../App';
export default function Header(props) {
  const [togleBreake, setToggleBraeake] = useState(true)
  const [Buttonchange ,setButtonchange]=useState(true)
  const [cookie, setCookie, removeCookies] = useCookies();
  const [scrolled, setScrolled] = useState(true)
  const navigate =useNavigate

  const Navbarchange = () => {
    if (window.scrollY >= 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', Navbarchange)
  

  return (
    <>


      <nav id="navbar1" className={scrolled ? "navbar navbar-expand-md  navbar-disactive  " : "navbar navbar-expand-md navbar--active  "}>
        <div class="container">
          <button class="navbar-toggler me-auto text-white  bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> 
          <div className='text-white'>
            <h3>BRAND</h3>
          </div>

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown m-2">
                <NavLink to='/home' class="nav-link">
                  HOME
                </NavLink>
                {/* <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item fw-bold" href="#">Home Version 1</a></li>
                  <li><a class="dropdown-item fw-bold" href="#">Home Version 2</a></li>
                  <li><a class="dropdown-item fw-bold" href="#">Home Version 3</a></li>
                  <li><a class="dropdown-item fw-bold" href="#">Home Version 4</a></li>
                  <li><a class="dropdown-item fw-bold" href="#">Home Version 5</a></li>
                </ul> */}
              </li>
              <li class="nav-item  m-2">
                <NavLink to="/about  " class="nav-link  m-2">ABOUT</NavLink>
              </li>
              <li class="nav-item  m-2">
                <NavLink to="/services" class="nav-link m-2" aria-current="page" href="#">SERVICE</NavLink>
              </li>

              {/* <li class="nav-item dropdown mx-2">
                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-2">
                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PAGES
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              <li class="nav-item m-2">
                <NavLink to="/contact" class="nav-link m-2" href="#" tabindex="-1" aria-disabled="true">CONTACT</NavLink>
              </li>
              <li class="nav-item  m-2">
              </li>

            </ul>


          </div>
          
          <div className=''>
           <NavLink to="/LoginForm" ><span className=' mx-2 fs-3 bi bi-person text-success'> </span></NavLink>  
          </div>
          <div>
            <NavLink to="" >  <span className='bi bi-cart mx-2 fs-4 '></span> </NavLink>
          </div>
         
        </div>


      </nav>

    </>
  );
}
