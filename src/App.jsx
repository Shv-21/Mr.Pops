import styled from "styled-components"
import Nav from "./components/Nav"
import font from './components/assets/HelveticaNeueCyr-Roman.woff2'

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
        src: url(${font});
    }

`

export default App
