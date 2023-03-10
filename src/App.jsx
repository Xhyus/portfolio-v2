import { Container } from '@chakra-ui/react'
import Navbar from './components/generic_components/Navbar'
import Conocimientos from './components/Conocimientos'
import Experiencia from './components/Experiencia'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxW={"container.xl"} py={20}>
        <SobreMi />
        <Conocimientos />
        <Experiencia />
        <Proyectos />
      </Container >
    </>
  )
}

export default App;