import React from "react";

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#">StarDB</a>
            </h3>

            <ul className="header-actions">
                <li>
                    <a href="#" className="btn-outline-success">
                        People
                    </a>
                </li>
                <li>
                    <a href="#" className="btn-outline-info">
                        Planets
                    </a>
                </li>
                <li>
                    <a href="#" className="btn-outline-warning">
                        Starships
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
