import React,{useContext} from 'react'
import Card from '../components/Cardcomponent/Card'
const ContextCart = () => {

    const  card =useContext(Cartcontext)
  return (
    <div> 
     <div className='container '>
    <div className='row  '>
          <div className='col-12 col-md-4 col-sm-6  hover---card'>
            <div key={id} >
              <NavLink to={"/carddetaile/" + id} key={imageUrl} ><img src={imageUrl} className="w-100  hover---card m-2"></img> </NavLink>
            </div>

          </div>
 
    </div>
    </div></div>
  )
}

export default ContextCart