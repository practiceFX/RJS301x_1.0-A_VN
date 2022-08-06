import React from 'react';
import { CardTitle, Row, Col } from 'reactstrap';
import styles from './modules/Footer.module.css';

const Footer = () => {
    return (
        <Row className={styles.footer}>
            <Col xs="4" className={styles.list}>
                <CardTitle className="h3">CUSTORMER SERVICES</CardTitle>

                <CardTitle>Help & Contact Us</CardTitle>
                <CardTitle>Return & Refunds</CardTitle>
                <CardTitle>Online Stores</CardTitle>
                <CardTitle>Terms & Conditions</CardTitle>

            </Col>
            <Col xs="4" className={styles.list}>
                <CardTitle className="h3">COMPANY</CardTitle>
                <CardTitle>What We Do</CardTitle>
                <CardTitle>Available Services</CardTitle>
                <CardTitle>Latest Posts</CardTitle>
                <CardTitle>FAQs</CardTitle>

            </Col>
            <Col xs="4" className={styles.list}>
                <CardTitle className="h3">SOCIAL MEDIA</CardTitle>

                <CardTitle>Twitter</CardTitle>
                <CardTitle>Instagram</CardTitle>
                <CardTitle>Facebook</CardTitle>
                <CardTitle>Pinterest</CardTitle>

            </Col>
        </Row>
    );
}

export default Footer;

// section footer page