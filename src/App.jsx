import './App.css'
import { Header } from './page/home/header'
import { Container } from './page/home/container'
import { Brand } from './page/home/brand'

function App() {
  return (
    <>
      <Header>
        <Brand/>
        <ul>
          <li>Projetos</li>
          <li>Sobre</li>
          <li>Contato</li>
          <li>Blog</li>
        </ul>
      </Header>
      <Container>
        <div>a</div>
      </Container>
    </>
  )
}

export default App
