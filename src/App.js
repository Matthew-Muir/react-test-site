import NavBar from './NavBar';
import FooterBar from './FooterBar';
import blackLogoBanner from './imgs/blackLogoBanner.png';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className='body-content'>
      <img id='logoBanner' src={blackLogoBanner} alt="Matt muir logo banner" />
      <AboutMe></AboutMe>
      </div>

      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
