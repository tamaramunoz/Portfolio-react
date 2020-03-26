import React, { Fragment } from "react";
import { Accordion, Card, Button } from "react-bootstrap";


const Accordions = (props) => {

  return (
    <Fragment>
      <div className="projectContainer">

        { props.project.map(item => {
          return (
            <div key={item.id} className="projectFull">
              <Accordion defaultActiveKey="0">
                <Card style={{ width: '20rem' }}>
                
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <Card.Img variant="top" src={item.img} />
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <Card.Body  className="projectCards">
                      <Card.Title className="pro-title"> {item.title} </Card.Title>
                      <Card.Text>
                        <Button ><a href={item.url} target="blank" className="btn-deploy">Ver Deploy</a></Button>
                      </Card.Text>
                    </Card.Body>
                  </Accordion.Collapse>

                </Card>
              </Accordion>
            </div>
          );
        }) }
      </div>
    </Fragment>
  );
};

export default Accordions;
