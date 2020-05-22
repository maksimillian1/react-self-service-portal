import React from "react";
import { useTheme } from '../hooks/useTheme';

export default function Footer() {

    const className = useTheme('footer__link')
    return (
        <div className="footer">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" className={className}>Company</a></li>
                    <li className="footer__item"><a href="#" className={className}>Contact us</a></li>
                    <li className="footer__item"><a href="#" className={className}>Carrers</a></li>
                    <li className="footer__item"><a href="#" className={className}>Privacy policy</a></li>
                    <li className="footer__item"><a href="#" className={className}>Terms</a></li>
                </ul>
                <div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>
    );
}