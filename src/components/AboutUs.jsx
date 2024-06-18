import { useGSAP } from "@gsap/react"
import styled from "styled-components"
import gsap from "gsap"
import scrollTrigger from 'gsap/ScrollTrigger';
import aboutusimg from './assets/image/girl_02.webp'
import { FaArrowRight } from "react-icons/fa6";
import first_1 from './assets/image/first_1.webp'
import first_2 from './assets/image/first_2.webp'
import second_2 from './assets/image/second_2.webp'
import third_1 from './assets/image/third_1.webp'
import { useEffect } from "react";

const AboutUs = () => {

   gsap.registerPlugin(scrollTrigger)

  useGSAP(()=>{

     gsap.from(".fe",{
       y: 50,
       stagger: .2,
       scrollTrigger:{
         start: 900
       }
     })

     gsap.to('.about_middle img',{
       scale: 1.55,
       scrollTrigger:{
        trigger:".about_middle",
        scrub:true
       }
     })

       gsap.to(".gallery_img",{
        x:"-633.15%",
        repeat: Infinity,
        duration: 4,
        ease:"none"
       })
 
  })

  return (
    <Div>
       <div className="about_head">
        <div><div className="fe" >THIS IS MR. POPS.</div></div>
        <div><div className="fe" >HE'LL COME IN  EVEN TO</div></div>
        <div><div className="fe" >THOSE</div></div>
        <div><div className="fe" >WHO ARE COMPLETELY</div></div>
        <div>
          <div><div className="fe" >INDIFFERENT</div></div>
        </div>
        <div><div className="fe" >TO ICE CREAM.</div></div>
       </div>
       <div className="about_middle">
         <img src={aboutusimg} alt="" />
       </div>
       <div className="about_subhead">
         <h3>
          WHO HAS TRIED IT, KNOWS EVERYTHING. THOSE WHO HAVEN'T - GET READY FOR THE DOPAMINE THIRST OF "THAT VERY TASTE"
         </h3>
       </div>
       <div className="about_passage">
        <p>
          "Our goal is not ice cream. It would be quite simple. We need to make you "touched" when you, for example, bite into an Eskimo. It is difficult to do, but we do it."
        </p>
        <p>
          "How? We do not tolerate simplifications: neither in tastes, nor in ingredients, nor in production. Pistachio, for example, we buy on a farm in the Bronte region, Sicily. We order Alfonso mango from India, and chocolate is brought to us directly from Belgium. Our Japanese matcha tea is exclusively of the Sagano variety."
        </p>
       </div>
       <div className="about_footer">
        <div className="ring">
          <svg width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_circles___YFtV">
            <path d="M80.5401 3.92485L83.3167 5.48241C86.3051 7.15875 89.666 8.0593 93.0922 8.10174L96.2756 8.14117C103.069 8.22532 109.33 11.8397 112.8 17.6813L114.425 20.4185C116.175 23.3644 118.636 25.8248 121.582 27.5746L124.319 29.2005C130.16 32.6703 133.775 38.9305 133.859 45.7244L133.898 48.9078C133.941 52.334 134.841 55.6949 136.518 58.6833L138.075 61.4599C141.399 67.3857 141.399 74.6144 138.075 80.5401L136.518 83.3168C134.841 86.3051 133.941 89.666 133.898 93.0922L133.859 96.2756C133.775 103.069 130.16 109.33 124.319 112.8L121.582 114.425C118.636 116.175 116.175 118.636 114.425 121.582L112.8 124.319C109.33 130.16 103.069 133.775 96.2756 133.859L93.0922 133.898C89.666 133.941 86.3051 134.841 83.3167 136.518L80.5401 138.075C74.6144 141.399 67.3856 141.399 61.4599 138.075L58.6833 136.518C55.6949 134.841 52.334 133.941 48.9078 133.898L45.7244 133.859C38.9305 133.775 32.6703 130.16 29.2005 124.319L27.5746 121.582C25.8248 118.636 23.3644 116.175 20.4185 114.425L17.6813 112.8C11.8397 109.33 8.22531 103.069 8.14116 96.2756L8.10173 93.0922C8.05929 89.666 7.15874 86.3051 5.48241 83.3168L3.92484 80.5401C0.600782 74.6144 0.60078 67.3857 3.92484 61.4599L5.4824 58.6833C7.15874 55.6949 8.05929 52.334 8.10173 48.9078L8.14116 45.7244C8.22531 38.9305 11.8397 32.6703 17.6813 29.2005L20.4185 27.5746C23.3644 25.8248 25.8248 23.3644 27.5746 20.4185L29.2004 17.6813C32.6703 11.8397 38.9305 8.22532 45.7244 8.14117L48.9078 8.10174C52.334 8.0593 55.6949 7.15875 58.6833 5.48241L61.4599 3.92485C67.3856 0.600792 74.6144 0.600789 80.5401 3.92485Z"></path>
           </svg>
           <svg width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_circles___YFtV">
            <path d="M80.5401 3.92485L83.3167 5.48241C86.3051 7.15875 89.666 8.0593 93.0922 8.10174L96.2756 8.14117C103.069 8.22532 109.33 11.8397 112.8 17.6813L114.425 20.4185C116.175 23.3644 118.636 25.8248 121.582 27.5746L124.319 29.2005C130.16 32.6703 133.775 38.9305 133.859 45.7244L133.898 48.9078C133.941 52.334 134.841 55.6949 136.518 58.6833L138.075 61.4599C141.399 67.3857 141.399 74.6144 138.075 80.5401L136.518 83.3168C134.841 86.3051 133.941 89.666 133.898 93.0922L133.859 96.2756C133.775 103.069 130.16 109.33 124.319 112.8L121.582 114.425C118.636 116.175 116.175 118.636 114.425 121.582L112.8 124.319C109.33 130.16 103.069 133.775 96.2756 133.859L93.0922 133.898C89.666 133.941 86.3051 134.841 83.3167 136.518L80.5401 138.075C74.6144 141.399 67.3856 141.399 61.4599 138.075L58.6833 136.518C55.6949 134.841 52.334 133.941 48.9078 133.898L45.7244 133.859C38.9305 133.775 32.6703 130.16 29.2005 124.319L27.5746 121.582C25.8248 118.636 23.3644 116.175 20.4185 114.425L17.6813 112.8C11.8397 109.33 8.22531 103.069 8.14116 96.2756L8.10173 93.0922C8.05929 89.666 7.15874 86.3051 5.48241 83.3168L3.92484 80.5401C0.600782 74.6144 0.60078 67.3857 3.92484 61.4599L5.4824 58.6833C7.15874 55.6949 8.05929 52.334 8.10173 48.9078L8.14116 45.7244C8.22531 38.9305 11.8397 32.6703 17.6813 29.2005L20.4185 27.5746C23.3644 25.8248 25.8248 23.3644 27.5746 20.4185L29.2004 17.6813C32.6703 11.8397 38.9305 8.22532 45.7244 8.14117L48.9078 8.10174C52.334 8.0593 55.6949 7.15875 58.6833 5.48241L61.4599 3.92485C67.3856 0.600792 74.6144 0.600789 80.5401 3.92485Z"></path>
           </svg>
        </div>   
           <FaArrowRight id="arrow" />   
        <span>About us</span>
       </div>
       <div className="about_gallery">
            <img src={first_1}   className="gallery_img" alt="" />
            <img src={first_2}  className="gallery_img" alt="" />
            <img src={first_1}  className="gallery_img" alt="" />
            <img src={second_2} className="gallery_img"  alt="" />
            <img src={third_1}  className="gallery_img" alt="" />
            <img src={first_2}  className="gallery_img" alt="" />
            <img src={first_1}  className="gallery_img" alt="" />
            <img src={first_2}  className="gallery_img" alt="" />
       </div>
    </Div>
  )
}

const Div = styled.div`
    background: #B00E2F;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    
    .about_head{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .about_head div{
      overflow: hidden;
      color: white;
    }

    .fe{
      display: inline-block;
      font-family: cervo_medium;
    }

    .about_middle{
      overflow: hidden;
    }
  
    .about_middle img{
      width: 100%;
      height: 100%;
    }

    .about_footer{
      display: flex;
      align-items: center;
      font-family: cervo_medium;
      color: white;
      position: relative;
    }

    .ring{
      position: relative;
      overflow: hidden;
      border-radius: 50%;
    }
    .ring svg {
      stroke: white;
      animation: rota 8s cubic-bezier(1,1,.12,.12) infinite;
      height: max-content;
    }

    .ring svg:nth-child(2){
      position: absolute;
      left: 0;
      animation-duration: 5s;
    }

    .ring:hover svg:nth-child(3){
      color: white;
    }

    .ring::after{
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      border-radius: 50%;
      height: 100%;
      background: white;
      transform: translateY(100%);
      transition: transform .4s ease;
    }

    .ring:hover:after{
      transform: translateY(0%); 
    }

    @keyframes rota {
      0%{
        transform: rotate(360deg);
      }
    }

    .about_gallery{
      margin-top: 30px;
      width: fit-content;
      transform: translateX(39.4%);
      display: flex;
      gap: 10px;
    }
    
    .about_gallery img{
      height: 100%;
      width: 180px; 
      white-space: nowrap;
      animation: motion 4s linear infinite;
    }

    .about_gallery img:nth-child(odd){
      border-radius: 30px 0 0 0;
    }
    
    .about_gallery img:nth-child(even){
      border-radius: 0 30px 0 0;
    }

    @media (max-width: 321px){

      padding: 60px 0 10px 0;

      .about_head div{
        height: 42px;
      }

      .fe{
        font-size: 40px;
      }

      .about_middle{
        margin-block: 40px;
        width: 89%;
        height: 400px;
        border-radius: 150px 150px 0 0
      }

      .about_subhead{
        width: 89%;
      }

      h3{
        font-family: cervo_medium;
        color: white;
        line-height: 30px;
        font-weight: 300;
        font-size: 28px;
      }

      .about_passage{
        margin-bottom: 10px;
        width: 89%;
        color: white;
      }

      .about_passage p{
        margin-block: 20px;
        font-family: font_HelveticaNeueCyr;
        font-size: 13px;
      }

      .about_footer{
        width: 89%;
        gap: 20px;
      }

      .ring{
       height: 88px;
      }

      .ring svg{
        width: 88px;
      }

      #arrow{
      top: 40%;
      left: 12%;
      position: absolute;
      width: 20px;
    }

    .about_gallery{
      height: 250px;
    }

    }

`

export default AboutUs