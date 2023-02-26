import React from 'react'
import { Router, Route, Routes, Link } from 'react-router-dom'


import UserForm from '../components/Forms/UserForm'
import Changecard from '../components/Cardcomponent/Changecard'
import Card from '../components/Cardcomponent/Card'
import { LoginForm } from '../components/Forms/LoginForm'
import App from '../App'
import Errorpage from './Errorpage'
import AboutUs  from '../components/DetailePages/AboutUs'
import About from '../components/DetailePages/About'
import Contact from '../components/DetailePages/Contact'
import Services from '../components/DetailePages/Services'
import CardDetaile from '../components/Cardcomponent/CardDetaile'
import TeamDetailePage from '../components/DetailePages/TeamDetailePage'
import Maincomponent from '../components/Maincomponent/Maincomponent'
 
const RouteComponent = () => {
  return (
    <div>


      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/home" element={<App />} />
        <Route path='/LoginForm' element={<LoginForm />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path='/card' element={<Changecard />} />
        <Route path="/carddetaile/:id" element={<CardDetaile />} />
        <Route path='/Aboutus' element={<AboutUs />}  />
        <Route path='/Main' element={<Maincomponent/>}/>
        <Route path='/Teamdetaile/:id' element={<TeamDetailePage />} />
        <Route path='*' element={<Errorpage />}> </Route>
      </Routes>

    </div>
  )
}

export default RouteComponent