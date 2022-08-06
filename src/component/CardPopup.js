import React from 'react';
import { CardImg, Row, Col, CardTitle, CardText, Button, CardBody } from 'reactstrap';
import styles from './modules/cardPopup.module.css';
import { Link } from 'react-router-dom'

const CardPopup = props => {
    return (
        props.active == true ? (
            <CardBody className={`${styles.cardPopup} card-popup`}>
                <Row className={styles.innerCardPopup} >
                    <Col xs="6" className={styles.img}>
                        <CardImg src={props.img} />
                    </Col>
                    <Col xs="6">
                        <CardTitle className={`h2 ${styles.title}`}>
                            <strong>
                                {props.title}
                            </strong>
                        </CardTitle>
                        <CardText className={styles.shortDesc}>{props.short_des}</CardText>
                        <Link to={`/detail/apple?id=${props.id}&category=${props.category}`} className={styles.link}>
                            <Button className={styles.btn_viewDetail}>
                                <i class="fa fa-cart-plus" aria-hidden="true"></i>&nbsp;
                                <span>View Detail</span>
                            </Button>
                        </Link>
                    </Col>
                </Row >
            </CardBody >
        ) : null
    );
}

export default CardPopup;

// Section view detail Product when click item of section TopProduct in the page home