import home from './imgs/home.svg';
import linkedin from './imgs/linkedin.svg';
import github from './imgs/github.svg';



const FooterBar = () => {
    return ( 
        <div className="footer-bar">
            <a href='https://github.com/Matthew-Muir' target='_blank'><img src={github} alt="github logo" className='footer-button'/></a>
            <a href='/'><img src={home} alt="github logo" className='footer-button'/></a>
            <a href='https://www.linkedin.com/in/matthewmuir-wa' target='_blank'><img src={linkedin} alt="github logo" className='footer-button'/></a>
        </div>
     );
}
 
export default FooterBar;