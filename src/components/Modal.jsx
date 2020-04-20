import React, { Fragment,useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
// import Accordions from "./Accordion";

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

    const [ modalShow, setModalShow ] = useState(false);

    return (
        <Fragment>
            <div className="portfolioBg">
                <h2 className="subtitle">Portafolio</h2>
                
                <div className="projectsContainer">
                    {
                        project.map(item => {
                            return (
                            <div key={item.id}>
                                <Button 
                                    onClick={() => setModalShow(true)} 
                                    className="projectButton"
                                >
                                    {item.title}
                                </Button>
                            </div>
                            )
                        })
                    }
                    
                <>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        project={project}
                        
                    />
                </>
                </div>
            </div>

            
        </Fragment>
    );
}

export default Portfolio;