import styled from "styled-components"
import Nav from "./components/Nav"
import font_HelveticaNeueCyr from './components/assets/HelveticaNeueCyr-Roman.woff2'
import font_cervo from './components/assets/Cervo.woff2'

function App() {

  return (

   <Div>
      <Nav/>
   </Div>

  )

}

const Div = styled.div`
    font-family: myFirstFont;
    @font-face {
        font-family: myFirstFont;
        src: url(${font_HelveticaNeueCyr});
    }

    @font-face {
        font-family: cervo;
        src: url(${font_cervo});
    }

`

export default App
