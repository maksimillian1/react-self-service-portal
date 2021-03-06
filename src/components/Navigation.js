import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { hot } from "react-hot-loader/root";
import iconBookmark from '../assets/SVG/bookmark.svg';
import iconChat from '../assets/SVG/chat.svg';
import logoMagnGlass from "../assets/SVG/magnifying-glass.svg";
import {AuthContext} from '../contexts/AuthContext';
import { useTheme } from '../hooks/useTheme';

function Navigation() {
    const auth = useContext(AuthContext);
    const className = useTheme('user-nav__notification')
    const avatar = `https://dev99142.service-now.com/sys_attachment.do?sys_id=${auth.avatar}`;    

    return (
        <header className="header">
            <Link className="user-nav user-nav__user-link" to="/">
                <h2>Home</h2>
            </Link>

            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search" />
                <button className="search__button">
                    <img src={logoMagnGlass} className="search__icon"/>
                </button>
            </form>
            <nav className="user-nav">
                <Link className="navigation__link" to="/requests">
                    <div className="user-nav__icon-box">
                        <img src={iconBookmark} alt="trillo logo" className="user-nav__icon"/>
                        <span className={`user-nav__notification ${className}`}>7</span>
                        <span className="anotation">Your current tasks</span>
                    </div>
                </Link>

                <Link to="/incidents">
                    <div className="user-nav__icon-box">
                            <img src={iconChat} alt="trillo logo" className="user-nav__icon"/>
                            <span className={`user-nav__notification ${className}`}>13</span>
                    </div>
                </Link>

                <div className="user-nav__user">
                    <Link className="user-nav__user-link" to="/user">
                        <img src={avatar} alt="User photo" className="user-nav__user-photo"/>
                        <span className="user-nav__user-name">{auth.first_name}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

                


export default hot(Navigation);
