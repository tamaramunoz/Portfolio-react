import React, { Fragment } from 'react'
import avatar from '../images/avatar.png'


const Profile = () => {
    return (
        <Fragment>
            <div className="profile">
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
                    Front-end developer, disfruto probar nuevas tecnologías por eso es que estoy siempre preparada para aprender e integrar nuevos conocimientos y habilidades. Me gustan las áreas de la programación donde pueda seguir explorando mi creatividad y la experimentación. La idea de asumir retos cada vez más grandes me entusiasma, porque lo considero una buena oportunidad para poner en practica lo que he aprendido y también para seguir fomentando mi curiosidad.
                </p>
            </div>
        </Fragment>
    );
}

export default Profile;
