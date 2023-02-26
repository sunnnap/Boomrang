import React from 'react'
import { NavLink } from 'react-router-dom';


import './Card.css';
const Card = ({ demo }) => {

  console.log(demo)

  return (
    <div>
      <div className='container'>
        <div className='row'>

          {
            demo.map((data) => {
              return (
                <div className='col-12 col-md-4 col-sm-6 hover---card'>
                  <div key={data.id} >
                    <NavLink to={"/carddetaile/" + data.id} key={data.imageUrl} ><img src={data.imageUrl} className="w-100  hover---card m-2"></img> </NavLink>
                  </div>

                </div>

              )

            })
          }
        </div>

      </div>
    </div>
  )
}

export default Card
