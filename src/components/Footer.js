import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                </ul>
                <div>Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>
    );
}