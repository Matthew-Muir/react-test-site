import NavBar from './NavBar';
import FooterBar from './FooterBar';
import blackLogoBanner from './imgs/blackLogoBanner.png';
import AboutMe from './AboutMe';
import Projects from './Projects';

function App() {
  return (
    <div className="App">


      <div className='body-content'>
      <NavBar></NavBar>
      <img id='logoBanner' src={blackLogoBanner} alt="Matt muir logo banner" />
      <AboutMe></AboutMe>
      <Projects></Projects>
      <FooterBar></FooterBar>
      </div>

  
    </div>
  );
}

export default App;
