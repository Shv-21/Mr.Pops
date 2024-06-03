
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Marquee = () => {

    useGSAP(()=>{
      
    })

  return (
    <Div>
      <div><span className='light'>Natural products</span><span>Natural products</span></div>
      <div><span>Natural products</span><span  className='light'>Natural products</span></div>
      <div><span className='light'>Natural products</span><span>Natural products</span></div>
    </Div>
  )
}

const Div = styled.div`


`
export default Marquee