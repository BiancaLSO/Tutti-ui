import styles from "./Footer.module.css";
import React from "react";
import './Footer.module.css';
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
// import logo from './note-logo.svg';
// import logo from './daos-logo.png';

function Footer(){

    return (
    <footer className={styles}>
    <div className={styles.container}>
    <div className = {styles.columnOne}></div>
    <div className = {styles.columnTwo}></div>
    <div className = {styles.columnThree}></div>
    <section className="footer">
        <h3>MUSIK SAMSPIL</h3>
        <div className="footer-links">
        <div className="footer-link-wrapper">
        <div className="footer-link-items">
            <span style={{ marginLeft: "40px" }}>
             <a href="/">Se opslag</a> 
             </span> 
             <span style={{ marginLeft: "10px" }}>
             <a href="/">Profil</a>
            </span>
        </div>
        </div>
        </div>
        <br />
        <section className="social-media">
        <div className="social-media-wrap">
        <div className="social-media-logo">
                <span style={{ marginLeft: "40px" }}>
                    <FaInstagramSquare  className="instagram"/>
                </span>
                <span style={{ marginLeft: "10px" }}>
                    <FaFacebookSquare className="facebook"/>
                </span>
                <span style={{ marginLeft: "10px" }}>
                    <FaLinkedin className="linkedin"/>
                </span>
        </div>
        </div>
        </section>
        </section>
        <section className="image-middle-row">
        <section className="notes-image">
            <img src="/images/note.svg" alt="notes" />
        </section>
        </section>
        <section className="logo-right-row">
        <section className="logo">
            <img src="/images/daos-logo.png" alt="Logo" />
        </section>
        </section>
        </div>
        </footer>
    )
}

export default Footer;