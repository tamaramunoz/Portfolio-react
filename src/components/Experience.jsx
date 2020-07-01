import React, { Fragment, useEffect, useState } from 'react'
import '../App.css'
import Accordions from './Accordion'
import { db } from '../Backend/firebase'


const Experience = () => {

    const [project, setProject] = useState([]);

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = async () => {
        try {
          const data = await db.collection('projects').orderBy('date', 'desc').get()
          const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          setProject(arrayData)
  
        } catch (error) {
          console.log(error)
        }
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

export default Experience