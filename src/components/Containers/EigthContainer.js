import React, { useEffect, useState } from 'react'
import eigthimg from './Image/eightimg8.jpg'
 

const Counter =(props)=>{
const [count,setcount]=useState(0);
 
useEffect(()=>
{
  const countTime= setTimeout(()=>{
      setcount(count+1)   
  },100)
  if(count===props.value)
  {
    clearTimeout(countTime);
  }
},[count,props.value])
return <h1>{count}</h1>
} 
 const EigthContainer=()=>{
  return (
    <div className='bg-light'>
        <div className='container-fluid' id="scroll"> 
           <div className='row text-center' style={{padding:"5rem"}}>
            <div className='col-12 col-md-3 col-sm-6'>
              <div>
                <span className='bi bi-lightning fs-1 text-info p-3'></span>
              </div>
              <div>
                <h1><Counter value={1200}/></h1>
                <h1> </h1>
              </div>
              <div>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className='col-12 col-md-3 col-sm-6'>
              <div>
                <span className='bi bi-diamond fs-1 text-info'></span>
              </div>
              <div>
              <h1><Counter value={1530}/></h1>
              </div>
              <div>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className='col-12 col-md-3 col-sm-6'>
              <div>
                <span className='bi bi-fire fs-1 text-info'></span>
              </div>
              <div>
              <h1><Counter value={800}/></h1>
              </div>
              <div>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className='col-12 col-md-3 col-sm-6'>
              <div>
                <span className='bi bi-controller fs-1 text-info'></span>
              </div>
              <div>
              <h1><Counter value={1100}/></h1>
              </div>
              <div>
                <p>Happy Clients</p>
              </div>
            </div>
           </div>
           <img src={eigthimg} className="w-100"></img>
        </div>
    </div>
  )
}

export default EigthContainer