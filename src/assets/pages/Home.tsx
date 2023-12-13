import Container from "../system/Container"
import Background from "../components/Background"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Cursor from "../components/Cursor"

const Home = () => {
  return (
    <>
      <Cursor />
      <Container>
        <Background />
        <Header />
        <Intro />
      </Container>
    </>
  )
}

export default Home