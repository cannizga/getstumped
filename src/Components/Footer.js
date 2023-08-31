import React from "react";
import { BiMeteor } from "react-icons/bi";
import "./Footer.css";

export function Footer() {
    return (
        <div className="footer">  
            <BiMeteor className="page-icon" />
            <footer>Page By Giuseppe Cannizzo</footer>
        </div>
      );
}