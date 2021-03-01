import React from 'react';
import "./Header.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <div className="header-style">
            <h1 className="title-style">
                <img src="http://www.chittagongvikings.com/wp-content/themes/ctg-vikings/images/logo.png" alt="LOGO"/>
                 Chattogram Vikings 
            <span style={{fontSize: "25px", color: "black"}}> Team Up</span></h1>
        </div>
    );
};

export default Header;