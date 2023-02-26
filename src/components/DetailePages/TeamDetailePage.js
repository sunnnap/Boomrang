import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Peopleapi from '../Apifile/Peopleapi'

const TeamDetailePage = () => {
    const params =useParams()
    const [data ,setData]=useState(Peopleapi[params.id])
    console.log("team id",data.id)
  return (
     <>
        <div className='container-fluid'>
<div className='row'>
    <div className='col-12 col-md-6 col-sm-6'>
<img src={data.image} className="w-100"></img>
    </div>
</div>
        </div>
     </>
  )
}

export default TeamDetailePage