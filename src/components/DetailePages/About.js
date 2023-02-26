import { useCallback, useState } from 'react'
import { useCookies } from 'react-cookie'
import { NavLink, useNavigate } from 'react-router-dom'
import Peopleapi from '../Apifile/Peopleapi'
import './About.css'
const About =  () => {
  const [people, setPeople] = useState(Peopleapi)
  const [cookies, setCookies, removeCookies]=useCookies()
  const [usename ,setUsername]=useState('')
  const Navigate =useNavigate()

   
  console.log("About page")
   
  return (
    <div className='container' style={{marginTop:"4rem"}}>
      <div className='fs-1'>
      <NavLink  to="/">   <span className='bi bi-arrow-left'> </span>   </NavLink>
      </div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>
      <h2 className='text-center m-4 fs-1 text-secondary'>Our Team</h2>
      <div className="row">
     
        {
          people.map(people => (    
              <>
                <div className="column col-12 col-md-4 col-sm-6 card--hover--2  mt-3">
                
                  <div className="card ">
                    <img src={people.image} alt="gabbar" className='w-100' />
                    <div className="container">
                      <h2>{people.name}</h2>
                      <p className="title">{people.title}</p>
                      <p>{people.content}</p>
                      <p>jane@example.com</p>
                      <NavLink to={"/Teamdetaile/" + people.id}>   <p> <button className="button2  rounded-pill fs-4" >Contact</button> </p></NavLink>
                    </div>
                  </div>
                </div>
              </>
           
          ))
        }
      </div>

    </div>
  )
}

export default About