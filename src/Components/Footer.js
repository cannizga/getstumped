import React from "react";
import { BiMeteor } from "react-icons/bi";
import "./Footer.css";

export function Footer() {
    return (
        <div className="footer">  
            <BiMeteor className="page-icon" />
            <footer>Page Made By Giuseppe Antonio Cannizzo Jr.</footer>
        </div>
      );
}