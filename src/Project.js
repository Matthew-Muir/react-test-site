import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Project = () => {
    const {id} = useParams();
    const [title, setTitle] = useState(null);
    const [objective, setObjective] = useState(null);
    const [tech, setTech] = useState(null);
    const [challenges, setChalleneges] = useState(null);
    const [github, setGitHub] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/projects/${id}`).then(res => {
            return res.json();
        }).then(data => {
            setTitle(data.title);
            setObjective(data.objective);
            setTech(data.tech);
            setChalleneges(data.challenges);
            setGitHub(data.github);
        })
    }, []);

    return ( 
        <div className="body-content">
            {title && (
            <article id="project">
            <h1>{title}</h1>
            <h3>Objective</h3>
            <p>{objective}</p>
            <h3>Technologies</h3>
            <p>{tech}</p>
            <h3>Challenges</h3>
            <p>{challenges}</p>
            <a href={github} target="_blank" rel="noreferrer">Link to Repo</a>

            </article>

            )}
        </div>
     );
}
 
export default Project;