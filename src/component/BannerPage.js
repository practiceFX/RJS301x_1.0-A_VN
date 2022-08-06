import React from 'react';
import styles from './modules/BannerPage.module.css';
import { CardTitle, Row, Col } from 'reactstrap';

const BannerPage = props => {
    return (
        <Row className={styles.banner}>
            <Col xs="6">
                <CardTitle className={`h1 ${styles.title}`}>{props.title}</CardTitle>
            </Col>
            <Col xs="6">
                <CardTitle className={`h6 ${styles.text}`}>{props.url == '' ? props.title : props.url}</CardTitle>
            </Col>
        </Row>
    );
}

export default BannerPage;


// Title of The Page