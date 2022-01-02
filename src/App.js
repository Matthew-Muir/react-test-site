import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import blackLogoBanner from './blackLogoBanner.png';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className='body-content'>
      <img id='logoBanner' src={blackLogoBanner} alt="Matt muir logo banner" />
      </div>

      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
