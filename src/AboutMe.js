import csharp from './imgs/csharp.svg';
import js from './imgs/js.svg';
import html from './imgs/html.svg';
import css from './imgs/css.png';
import sql from './imgs/sql.png';
import aws from './imgs/aws.svg';
import react from './imgs/react.svg';

const AboutMe = () => {
    return ( 
        <section className="about-me">

            <h4>Matt Muir, Full-Stack C# .Net Developer/Web Developer</h4>
            <p>Driven and eager for new challeneges. I'm looking for developer roles
                that not only allow me build interesting software solutions. But be part
                of a team that supports growth and creativity.
            </p>

            <h4>Which Technologies Am I Proficent With?</h4>
            <ul className="tech-icons-list">
                <li><img className="tech-icon" src={csharp} alt="c sharp logo" /></li>
                <li><img className="tech-icon" src={js} alt="java script logo" /></li>
                <li><img className="tech-icon" src={sql} alt="sql logo" /></li>
                <li><img className="tech-icon" src={html} alt="html logo" /></li>
                <li><img className="tech-icon" src={css} alt="css logo" /></li>
                <li><img className="tech-icon" src={aws} alt="aws logo" /></li>
                <li><img className="tech-icon" src={react} alt="react logo" /></li>
            </ul>

            <h4>Want to know more?</h4>
            <button className='cv-button'>Download My Resume</button>

            <h4>Also Checkout My Projects Section Below</h4>




        </section>
     );
}
 
export default AboutMe;