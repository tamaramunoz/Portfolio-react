import React, { Fragment } from 'react';
import Logo from '../images/logo.png'

const Card = () => {
    return (
        <Fragment>
            <div className="card-group">

                <div className="card">
                    <img src={Logo} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div className="card">
                    <img src={Logo} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>

                <div className="card">
                    <img src={Logo} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default Card;
