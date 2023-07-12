import './App.css'
import { Header } from './page/home/header'
import { Container } from './page/home/container'
import { Brand } from './page/home/brand'
import { List } from './page/home/list'
import { ListItem } from './page/home/item-list'

function App() {
  return (
    <>
      <Header>
        <Brand/>
        <List>
          <ListItem>Projetos</ListItem>
          <ListItem>Sobre</ListItem>
          <ListItem>Contato</ListItem>
          <ListItem>Blog</ListItem>
        </List>
      </Header>
      <Container>
        <div>a</div>
      </Container>
    </>
  )
}

export default App
