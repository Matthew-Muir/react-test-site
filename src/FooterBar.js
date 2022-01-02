import home from './home.svg';
import linkedin from './linkedin.svg';
import github from './github.svg';



const FooterBar = () => {
    return ( 
        <div className="footer-bar">
            <a href='#'><img src={github} alt="github logo" className='footer-button'/></a>
            <a href='#'><img src={home} alt="github logo" className='footer-button'/></a>
            <a href='#'><img src={linkedin} alt="github logo" className='footer-button'/></a>
        </div>
     );
}
 
export default FooterBar;