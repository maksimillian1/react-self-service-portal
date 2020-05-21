import React from 'react';
import {Link} from "react-router-dom";

import acquisition from "../assets/SVG/acquisition.svg";
import incident from "../assets/SVG/tools-and-utensils.svg";
import task from "../assets/SVG/clipboard.svg";
import request from "../assets/SVG/question.svg";
import approval from "../assets/SVG/approval.svg";
import article from "../assets/SVG/article.svg";



export default function HomePage() {

    return (
        <div className="row">
            <h1 className="heading-primary">
                Welcome to self-service portal
            </h1>
            
            <div className="row row--flex">
                <div className="col">
                    <div className="menu-box">
                        <ul className="menu-box__list">
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="/incidents">
                                    <img src={incident} className="menu-box__icon"/>
                                    <div>My Incidents</div>
                                </Link>
                            </li>
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="">
                                    <img src={task} className="menu-box__icon"/>
                                    <div>My Tasks</div>
                                </Link>
                            </li>
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="/requests">
                                    <img src={request} className="menu-box__icon"/>
                                    <div>My Request</div>
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
                                    <img src={acquisition} className="menu-box__icon"/>
                                    <div>My Assets</div>
                                </Link>
                            </li>
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="">
                                    <img src={approval} className="menu-box__icon"/>
                                    <div>My Approvals</div>
                                </Link>
                            </li>
                            <li className="menu-box__item">
                                <Link className="menu-box__link" to="">
                                    <img src={article} className="menu-box__icon"/>
                                    <div>My Knoledge Articles</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
<div className="info-box">
                <p className="paragraph">
                    To navigate through you can use menu below
                </p>
            </div>
*/