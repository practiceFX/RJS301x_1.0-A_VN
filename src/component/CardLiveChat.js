import React from 'react';
import { Card, CardTitle, Col, Row, Button } from 'reactstrap';
import styles from './modules/cardLiveChat.module.css';

const CardLiveChat = () => {
    return (
        <React.Fragment>
            <Card className={styles.live_chat}>
                <i className="fa-brands fa-facebook-messenger"></i>
            </Card>
            {/* <Card className={styles.live_chat_table}>
                <Row className={styles.innner_live_chat}>
                    <Col xs="6">
                        <CardTitle>Customer Support</CardTitle>
                    </Col>
                    <Col xs="6">
                        Live Chat App
                    </Col>
                    <Col xs="12" className={styles.box_chat}>
                    </Col>
                    <Col xs="12">
                        <Row>
                            <Col xs="1">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </Col>
                            <Col xs="10">
                                <input type="text" name="" id="" />
                            </Col>
                            <Col xs="1">
                                <Button>
                                    <i class="fa fa-send" aria-hidden="true"></i>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card> */}
        </React.Fragment >
    );
}

export default CardLiveChat;
