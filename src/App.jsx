import styled from "styled-components";
import Head from "./components/Nav";
import font_HelveticaNeueCyr from './components/assets/HelveticaNeueCyr-Roman.woff2';
import font_HelveticaNeueCyr_italic from './components/assets/HelveticaNeueCyr-Italic.woff2';
import font_cervo from './components/assets/Cervo.woff2';
import font_cervo_Medium from './components/assets/Cervo-Medium_1.woff2';
import Marquee from "./components/Marquee";
import LocomotiveScroll from "locomotive-scroll";
import AboutUs from "./components/AboutUs";

function App() {
 
  const scroll = new LocomotiveScroll()

  return (

   <Div>
      <Head/>
      <Marquee/>
      <AboutUs/>
   </Div>

  )

}

const Div = styled.div`
overflow: hidden;
    font-family: font_HelveticaNeueCyr;
    @font-face {
        font-family: font_HelveticaNeueCyr;
        src: url(${font_HelveticaNeueCyr});
    }

    @font-face {
        font-family: font_HelveticaNeueCyr_italic;
        src: url(${font_HelveticaNeueCyr_italic});
    }

    @font-face {
        font-family: cervo;
        src: url(${font_cervo});
    }
    @font-face {
        font-family: cervo_medium;
        src: url(${font_cervo_Medium});
    }

`

export default App
