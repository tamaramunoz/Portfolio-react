import React, { Fragment, useEffect, useState } from "react";
import "../App.css";
import { Media } from "react-bootstrap";


const Experience = () => {

  const [ works, setWorks ] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/Portfolio-react/master/src/json/Projects.json')
        const infoProjects = await data.json()
        // console.log(infoProjects)
        setWorks(infoProjects)
    }

    console.log(works)

  const isBackgroundWhite = true;

  return (
    <Fragment>

      <div className={isBackgroundWhite ? "background-white" : "background-blue"}>

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
                src={item.logo}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="exp-title">{item.title}</h5>
                <h6 className="exp-tool">{item.tools}</h6>
                <p className="exp-des">
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
