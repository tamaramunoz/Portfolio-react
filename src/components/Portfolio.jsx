import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';


const Portfolio = () => {

    const [modalShow, setModalShow] = React.useState(false);

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
