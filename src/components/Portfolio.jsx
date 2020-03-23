import React, { Fragment,useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';


const Portfolio = () => {

    const [ project, setProject ] = useState(null)

    useEffect(() => {
        console.log('useEffect')
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('')
        const users = await data.json()
        console.log(users)

    }





    const [ modalShow, setModalShow ] = useState(false);

    return (
        <Fragment>
            <div>
                <h2 className="subtitle">Portafolio</h2>
                <>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Aquí irán las imagenes de mis Proyectos
                    </Button>

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
