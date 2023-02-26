import React from 'react'
 
import Firstcontainer from '../Containers/Firstcontainer';
import Secondcontainer from '../Containers/Secondcontainer';
import Thirdcontainer from '../Containers/Thirdcontainer';
import Forthcontainer from '../Containers/Forthcontainer';
import Fifthcontainer from '../Containers/Fifthcontainer';
import Sixthcontainer from '../Containers/Sixthcontainer';
import Seventhcontainer from '../Containers/Seventhcontainer';
import EigthContainer from '../Containers/EigthContainer';
import Slidecontainer from '../Containers/Slidecontainer';
import Changecard from '../Cardcomponent/Changecard'
 

const Maincomponent = () => {
  return (
    <>
        <Firstcontainer></Firstcontainer>
        <Changecard></Changecard>
      <Secondcontainer></Secondcontainer>
      <Thirdcontainer></Thirdcontainer>
      <Forthcontainer></Forthcontainer>
      <Fifthcontainer/> 
      <Slidecontainer></Slidecontainer>
      <Seventhcontainer></Seventhcontainer>
      <EigthContainer></EigthContainer>
    </>
  )
}

export default Maincomponent