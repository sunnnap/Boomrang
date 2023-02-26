import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from './Image/CodePen-404-Page.gif'
const Errorpage = () => {
  return (
    <div> 
    <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<img src={Image}  className="w-50 m-5" />
			<h1 class="text-center ">404</h1>
		<NavLink to="/ " className="link_404">Go to Home</NavLink>
		</div>	
	</div>
		</div>
		</div>
		 
	 
</section>
    
    </div>
  )
}

export default Errorpage