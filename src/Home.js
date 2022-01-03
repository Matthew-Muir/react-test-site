import AboutMe from "./AboutMe";
import Projects from "./Projects";
import blackLogoBanner from './imgs/blackLogoBanner.png';

const Home = () => {
    return ( 
        <div id="home">
          <img
            id="logoBanner"
            src={blackLogoBanner}
            alt="Matt muir logo banner"
          />
          <AboutMe></AboutMe>
          <Projects></Projects>
        </div>
        
     );
}
 
export default Home;

/* 
      <div className="App">
        <div className="body-content">
          <NavBar></NavBar>
          <img
            id="logoBanner"
            src={blackLogoBanner}
            alt="Matt muir logo banner"
          />
          <AboutMe></AboutMe>
          <Projects></Projects>
          <FooterBar></FooterBar>
        </div>
      </div>
*/