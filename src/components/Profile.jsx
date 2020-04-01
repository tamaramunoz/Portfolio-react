import React, { Fragment } from 'react'
import avatar from '../images/avatar.png'
import Background from '../images/fondo-white.png';

let sectionStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${Background})`
  };

const Profile = () => {
    return (
        <Fragment>
            <div style={ sectionStyle } className="profile">
                <h2 className="subtitle">Acerca</h2>
                <div className="avatar-container">
                    <img 
                        width={400}
                        src={avatar} 
                        alt="Avatar"
                        className="avatar"
                    />
                </div>
                <p className="profileText">Desarrolladora Front-End, disfruto probar nuevas tecnologías por eso es que estoy siempre preparada para aprender e integrar nuevos conocimientos y habilidades. Me caracterizo por tener capacidad de adaptación, compromiso con las actividades que desarrollo y responsabilidad.</p>
            </div>
        </Fragment>
    );
}

export default Profile;
