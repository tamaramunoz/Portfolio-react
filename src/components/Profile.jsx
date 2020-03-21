import React, { Fragment } from 'react'
import Background from '../images/02profile.png';

let sectionStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${Background})`
  };

const Profile = () => {
    return (
        <Fragment>
            <section style={ sectionStyle }>
                <h2 className="subtitle">Perfil</h2>
            </section>
        </Fragment>
    );
}

export default Profile;
