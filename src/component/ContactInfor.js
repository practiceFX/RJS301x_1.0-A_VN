import React from 'react';
import { Row, Col, CardTitle, Input, Button } from 'reactstrap'
import styles from './modules/ContactInfor.module.css';

const ContactInfor = () => {
    return (
        <React.Fragment>
            <Row className={styles.card_infor}>
                <Col xs="4">
                    <CardTitle className={`h3 text-center`}><strong>FREE SHIPPING</strong></CardTitle>
                    <CardTitle className={`h6 text-center`}>Free shipping worldwide</CardTitle>
                </Col>
                <Col xs="4">
                    <CardTitle className={`h3 text-center`}><strong>24 X 7 SERVICE</strong></CardTitle>
                    <CardTitle className={`h6 text-center`}>Free shipping worldwide</CardTitle>
                </Col>
                <Col xs="4">
                    <CardTitle className={`h3 text-center`}><strong>FESTIVAL OFFER</strong></CardTitle>
                    <CardTitle className={`h6 text-center`}>Free shipping worldwide</CardTitle>
                </Col>

            </Row>
            <Row className={styles.search_box}>
                <Col xs="6">
                    <CardTitle className={`h3 text-center`}><strong>LET'S BE FRIENDS!</strong></CardTitle>
                    <CardTitle className={`h6 text-center`}>Nisi nisi tempar consequat laboris nis!</CardTitle>
                </Col>
                <Col xs="6">
                    <CardTitle className={styles.search_area}>
                        <Input placeholder="Enter your email address" />
                        <Button>Subscribe</Button>
                    </CardTitle>

                </Col>
            </Row>
        </React.Fragment>
    );
}

export default ContactInfor;


// Section infor and subscribe in page home 