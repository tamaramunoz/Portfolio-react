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
                  {item.description}
                </p>
              </Media.Body>
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
