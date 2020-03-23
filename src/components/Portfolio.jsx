import React, { Fragment,useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const Portfolio = () => {

    const [ project, setProject ] = useState([]);

    useEffect(() => {
        // console.log('useEffect')
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/Portfolio-react/developer/src/json/Projects.json')
        const infoProject = await data.json()
        // console.log(infoProject)
        setProject(infoProject)

    }

    const [ modalShow, setModalShow ] = useState(false);

    return (
        <Fragment>
            <div>
                <h2 className="subtitle">Portafolio</h2>

                <ul>
                    {
                        project.map(item => {
                            return (
                            <div>
                                <Button variant="primary" onClick={() => setModalShow(true)} key={item.id}>
                                    {item.title}
                                </Button>
                            </div>
                            )
                        })
                    }
                </ul>
                <>
                    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                        Aquí irán las imagenes de mis Proyectos
                    </Button> */}

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </>
            </div>
        </Fragment>
    );
}

export default Portfolio;
