import React from 'react';
import {Link} from "react-router-dom";

export default function HomePage() {

    return (
        <div className="row">
            <h1 className="heading-primary">
                Welcome to self-service portal
            </h1>
            <div className="info-box">
                <p className="paragraph">
                    To navigate through you can use menu below
                </p>
            </div>
            <div className="row row--flex">
                <div className="col">
                    <div className="menu-box">
                        <ul className="menu-box__list">
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="">
                                    My Incidents
                                </Link>
                            </li>
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="">
                                    My Assets
                                </Link>
                            </li>
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="">
                                    My Requests
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="menu-box">
                        <ul className="menu-box__list">
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="">
                                    My Tasks
                                </Link>
                            </li>
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="">
                                    My Approvals
                                </Link>
                            </li>
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="">
                                    My Knoledge Articles
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}