
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import scrollTrigger from 'gsap/ScrollTrigger';

const Marquee = () => {
  gsap.registerPlugin(scrollTrigger)
  // useGSAP(()=>{
  //    gsap.to(".marquee",{
  //      y: "-240%",
  //     scrollTrigger:{
  //       scrub: true,
  //       start: -250
  //     }
  //    })
  // })    

  return (
    <Div className='marquee' >
      <div className='marqu'>
         <div className='marq'>
          <h1 className='light'>A bright map of tastes</h1>
          <h1>A bright map of tastes</h1>
          <h1 className='light'>A bright map of tastes</h1>
         </div>  
          <div className='marq'>
        <h1>Natural products</h1>
        <h1  className='light'>Natural products</h1> 
        <h1>Natural products</h1>
        <h1  className='light'>Natural products</h1>
        <h1>Natural products</h1>
        <h1  className='light'>Natural products</h1>
         </div>
         <div className='marq'>
        <h1 className='light'>we always check quality</h1>
        <h1>we always check quality</h1>
        <h1 className='light'>we always check quality</h1>
         </div>
      </div>
    </Div>
  )
}

const Div = styled.div`
z-index: -1;
position: relative;
overflow: hidden;
transform: rotate(-5deg) translateY(-30%);
width: 110%;

.marq{
  display: flex;
  white-space: nowrap;
  align-items: center;
}

 h1{
  animation: motion1 5s linear infinite;
  padding-inline: 3vw;
  font-weight: normal;
  height: 65px;
  font-family: cervo_medium;
  font-size: 60px;
  text-transform: uppercase;
  color: #B00E2F;
}

.light{
  text-shadow: 0 -1px #B00E2F, 1px 0 #B00E2F, 0 1px #B00E2F, -1px 0 #B00E2F;
  color: #F4DCC2;
}

@keyframes motion1 {
  from{
    transform: translateX(-200%);
  }
  to{
    transform: translateX(0%);
  }
}

.marq:nth-child(2) h1{
  animation: motion2 3s linear infinite;
}

@keyframes motion2 {
  to{
    transform: translateX(-100%);
  }
}


`
export default Marquee