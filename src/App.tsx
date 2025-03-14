import Hero from './components/Hero/Hero'
import Nav from "./components/Nav/Nav";
import './assets/styles/Fonts.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <Nav />
    </div>
  )
}

export default App
