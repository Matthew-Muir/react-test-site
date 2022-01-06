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
        <div>
            {title && (
            <div id="project">
            <h1>{title}</h1>
            <h2>{objective}</h2>
            <h3>{tech}</h3>
            <h4>{challenges}</h4>
            <h5>{github}</h5>

            </div>

            )}
        </div>
     );
}
 
export default Project;