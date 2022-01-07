import resume from "./imgs/Muir_Resume_lite.pdf";

const Resume = () => {
    return (  
        <div style={{textAlign:'center'}} className="body-content" id="resume">
            <p>This pdf document may not be viewable on small devices. A download is available here!</p>
            <iframe id="resume-pdf" title="My Resume" src={resume} width="100%" height="600px"></iframe>
        </div>
    );
}
 
export default Resume;