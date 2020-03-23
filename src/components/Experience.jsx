import React, { Fragment, useEffect, useState } from "react";
import "../App.css";
import { Media } from "react-bootstrap";
import img from "../images/logo.png";


const Experience = () => {

  const [ works, setWorks ] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/Portfolio-react/developer/src/json/Projects.json')
        const infoProjects = await data.json()
        // console.log(infoProjects)
        setWorks(infoProjects)
    }

    console.log(works)

  const isBackgroundYellow = true;

  return (
    <Fragment>

      <div className={isBackgroundYellow ? "background-yellow" : "background-blue"}>

        <h2 className="subtitle">Experiencia</h2>

        <div className="experienceContainer">

        { works.map(item => {
          return (
          <ul className="list-unstyled" key={item.id}>
            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src={img}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>{item.title}</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>

            <Media as="li">
              <Media.Body>
                <h5>{item.title}</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Media.Body>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={img}
                alt="Generic placeholder"
              />
            </Media>

          </ul>
          )
        })
      }
        </div>

      </div>

    </Fragment>
  );
};

export default Experience;
