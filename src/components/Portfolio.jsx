import React, { Fragment, useState, useEffect } from 'react'
import Accordions from "./Accordion";


const Portfolio = () => {

    const [ project, setProject ] = useState([]);

    useEffect(() => {
        // console.log('useEffect')
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
                    <Accordions project={project} /> 
                </div>

            </div>
        </Fragment>
    );
}

export default Portfolio;
