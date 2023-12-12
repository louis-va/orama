import Container from "../system/Container"
import Background from "../components/Background"
import Header from "../components/Header"
import Intro from "../components/Intro"

const Home = () => {
  return (
    <Container>
      <Background />
      <Header />
      <Intro />
    </Container>
  )
}

export default Home