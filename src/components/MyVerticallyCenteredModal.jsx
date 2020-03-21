import React from 'react'
import { Modal, Button } from 'react-bootstrap'


const MyVerticallyCenteredModal = (props) => {
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Título del Proyecto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Herramientas de desarrollo</h5>
                <p>
                    Breve descripción de que se trata el proyecto
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
