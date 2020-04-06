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
                <p className="profileText">
                    Front-End developer, disfruto probar nuevas tecnologías por eso es que estoy siempre preparada para aprender e integrar nuevos conocimientos y habilidades. Me gustan las areas de la programación donde pueda seguir explorando mi creatividad y la experimentación. La idea de asumir retos cada vez más grandes me entusiasma, ya que lo considero una buena oportunidad para poner en practica lo que he aprendido y también para seguir fomentando mi curiosidad.
                </p>
            </div>
        </Fragment>
    );
}

export default Profile;
