import React, { Fragment } from "react";
import { Accordion, Card } from "react-bootstrap";


const Accordions = (props) => {

  return (
    <Fragment>
      <div className="projectContainer">

        { props.project.map(item => {
          return (
            <div key={item.id}>
              <Accordion defaultActiveKey="0">
                <Card >
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    {item.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">

                    <Card.Body  className="projectCards">
                      <Card.Title> {item.tools} </Card.Title>
                      <Card.Text>
                        {item.description}
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
