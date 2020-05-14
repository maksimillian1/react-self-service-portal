import React from "react";
import {Link} from "react-router-dom";
import { hot } from "react-hot-loader/root";
import iconBookmark from '../assets/SVG/bookmark.svg';
import iconChat from '../assets/SVG/chat.svg';
import logoUser from "../assets/user.jpg";
import logoMagnGlass from "../assets/SVG/magnifying-glass.svg";

function Navigation({user}) {
    

    return (
        <header className="header">
            <Link className="user-nav user-nav__user-link" to="/x_elsr_react_app_index-html.do">
                <h2>Home</h2>
            </Link>

            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search" />
                <button className="search__button">
                    <img src={logoMagnGlass} alt="trillo logo" className="search__icon"/>
                </button>
            </form>
            <nav className="user-nav">
                <Link className="navigation__link" to="/x_elsr_react_app_index-html.do/request">
                    <div className="user-nav__icon-box">
                        <img src={iconBookmark} alt="trillo logo" className="user-nav__icon"/>
                        <span className="user-nav__notification">7</span>
                        <span className="anotation">Your current tasks</span>
                    </div>
                </Link>

                <Link to="/x_elsr_react_app_index-html.do/incidents">
                    <div className="user-nav__icon-box">
                            <img src={iconChat} alt="trillo logo" className="user-nav__icon"/>
                            <span className="user-nav__notification">13</span>
                    </div>
                </Link>

                <div className="user-nav__user">
                    <Link className="user-nav__user-link" to="/x_elsr_react_app_index-html.do/user">
                        <img src={'https://dev99142.service-now.com/0214ADAF-1C76-4E34-966F-0EBD09534402.png'} alt="User photo" className="user-nav__user-photo"/>
                        <span className="user-nav__user-name">{user.first_name}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

                


export default hot(Navigation);
