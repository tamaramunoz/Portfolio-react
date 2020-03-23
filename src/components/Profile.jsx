import React, { Fragment } from 'react'
import Background from '../images/fondo-perfil.png';

let sectionStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${Background})`
  };

const Profile = () => {
    return (
        <Fragment>
            <section style={ sectionStyle }>
                <h2 className="subtitle">Perfil</h2>
                <p className="profileText">Desarrolladora Front-End, disfruto probar nuevas tecnologías por eso es que estoy siempre preparada para aprender e integrar nuevos conocimientos y habilidades. Me caracterizo por tener capacidad de adaptación, compromiso con las actividades que desarrollo y responsabilidad.</p>
            </section>
        </Fragment>
    );
}

export default Profile;
