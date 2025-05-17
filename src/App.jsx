import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Avatar from './components/Avatar'

function App() {

  return (
    <div>
      <Header />
      <h1>hello world</h1>
      <Avatar 
        src={'https://s.france24.com/media/display/12d89846-31f4-11f0-bc88-005056bfb2b6/w:1280/p:16x9/000_46WC3KH.jpg'}
        userName={"lamine"}
      />

      
      <Card  title="nika" content='futboli' />
      <Card title={'giorgi'} content={'telefoni dade'} />
      <Card />
    </div>
  )
}

export default App
