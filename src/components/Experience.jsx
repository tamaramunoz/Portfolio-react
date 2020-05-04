import React, { Fragment, useEffect, useState } from "react";
import "../App.css";
import Accordions from "./Accordion"


const Experience = () => {

    const [project, setProject] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/Portfolio-react/master/src/json/Projects.json')
        const infoProject = await data.json()
        // console.log(infoProject)
        setProject(infoProject)
    }

    return (
        <Fragment>
            <div>
                <h2 className="subtitle">Portafolio</h2>
                <div className="projectsContainer">

                    <p className="profileText">
                        Puedes conocer más a fondo uno a uno los proyectos de esta sección viendo su deploy o repositorio. Desarrollados con tecnologías como Javascript, HTML5, CSS3, NodeJS, React, Bootstrap, Firebase, y entre otras.
                    </p>
                    
                    <div>
                        <Accordions project={project} />
                    </div>

                </div>

            </div>
        </Fragment>
    );
};

export default Experience;
