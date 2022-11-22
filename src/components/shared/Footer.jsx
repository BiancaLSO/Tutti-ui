import styles from "./Footer.module.css";
import React from "react";
import './Footer.module.css';
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";


  function Footer(){

    return (
    <footer className={styles}>

    <div className={styles.container}>
    <div className="row">
        {/* Column One */}
    <div className = {styles.columnOne}>
        <h3>MUSIK SAMSPIL</h3>
            <div className="footer-links">
            <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <span style={{ marginLeft: "70px" }}>
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
                    <span style={{ marginLeft: "70px" }}>
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
        </div>
        {/* Column Two */}
    <div className = {styles.columnTwo}>
        <section className="image-middle-row">
            <section className="notes-image">
                <img src="/images/note.svg" alt="notes" />
        </section>
        </section>
    </div>
    {/* Column Three */}
    <div className = {styles.columnThree}>
        <section className="logo-right-row">
        <section className="logo">
            <img src="/images/Daos.png" alt="Logo" height={140} width={280} />
        </section>
        </section>
    </div>
    </div>
    </div>
    </footer>
    )
}

export default Footer;
