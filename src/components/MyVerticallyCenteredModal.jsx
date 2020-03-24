import React, { Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap'


const MyVerticallyCenteredModal = (props) => {

    // console.log(props.project);

    return (
        <Fragment>
            <div>
                {
                    props.project.map(item => (
                        <Modal
                            {...props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            key={item.id}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    {item.title}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h5> {item.tools} </h5>
                                <p>
                                    {item.description}
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={props.onHide}>Cerrar</Button>
                            </Modal.Footer>
                        </Modal>
                    ))
                }
            </div>
        </Fragment>
    );
}

export default MyVerticallyCenteredModal;
