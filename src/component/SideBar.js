import React from 'react';
import styles from './modules/SideBar.module.css';
import { Col, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'

const SideBar = () => {

    return (
        <Col xs="3" className={styles.categories}>
            <CardTitle className={`${styles.title} h4`}>CATEGORIES</CardTitle>
            <CardTitle className={`${styles.brand} h5`}>APPLE</CardTitle>
            <CardTitle className={`${styles.link} h6`}>
                <Link to="/shop/apple?categories=all">
                    All
                </Link>
            </CardTitle>
            <CardTitle className={`${styles.tag} h5`}>
                IPHONE & MAC
            </CardTitle>
            <CardTitle className={`${styles.link} h6`}>
                <Link to="/shop/apple?categories=iphone">
                    iPhone
                </Link>
            </CardTitle>
            <CardTitle className={`${styles.link} h6`}>
                <Link to="/shop/apple?categories=ipad">
                    iPad
                </Link>
            </CardTitle>
            <CardTitle className={`${styles.link} h6`}>
                <Link to="/shop/apple?categories=macbook">
                    Macbook
                </Link>
            </CardTitle>
            <CardTitle className={`${styles.tag} h5`}>
                WIRELESS
            </CardTitle>
            <CardTitle className={`${styles.link} h6`}>
                <Link to="/shop/apple?categories=airpod">
                    Airpod
                </Link>
            </CardTitle>
            <CardTitle className={`${styles.link} h6`}>
                <Link to="/shop/apple?categories=watch">
                    Watch
                </Link>
            </CardTitle>
            <CardTitle className={`${styles.tag} h5`}>
                OTHER
            </CardTitle>
            <CardTitle className={`${styles.link} h6`}>
                <Link to="/shop/apple?categories=mouse">
                    Mouse
                </Link>
            </CardTitle>
            <CardTitle className={`${styles.link} h6`}>
                <Link to="/shop/apple?categories=other">
                    Other
                </Link>
            </CardTitle>
        </Col>
    );
}

export default SideBar;


// Sections sidebar page of detail page