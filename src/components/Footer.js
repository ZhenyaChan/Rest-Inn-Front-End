import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="grid grid-col-3">
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/properties">Vacation Properties</Link></li>
                        <li><Link to="/login">Book a Property</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>About</h3>
                    <ul>
                        <li><Link to="/about">Our Company</Link></li>
                        <li><Link to="/about">Our Goals</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li><Link to="#">Customer Service</Link></li>
                        <li><Link to="#">Manager</Link></li>
                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright: Rest-Inn © 2022 by Tran Quang Dung</p>
        </footer>
    );
};

export default Footer;