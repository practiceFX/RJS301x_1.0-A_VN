import React from 'react';
import BannerPage from '../component/BannerPage';
import { Row, Col, CardTitle, Form, FormGroup, Label, Input, Button, CardBody } from 'reactstrap';
import styles from './module/checkout.module.css';
import { useDispatch, useSelector } from 'react-redux';


let stringToFormatPrice = Intl.NumberFormat('en-US');
const Checkout = () => {
    // get the data order stored in the local storage
    const dataOrder = useSelector(state => state.orderCart.product);
    // end 

    // the sum cost of the order
    const totalOrder = () => {
        let sum = 0;
        dataOrder.map((item) => {
            sum = sum + parseInt(item.price) * parseInt(item.amount)
        })
        return sum;
    }
    // end
    return (
        <React.Fragment>
            <BannerPage title="CHECKOUT" url="HOME / CART / CHECKOUT" />
            <Row className={styles.checkout}>
                <Col xs="12">
                    <CardTitle className={`${styles.title} h3`}>
                        <strong>
                            BILLING DETAILS
                        </strong>
                    </CardTitle>
                </Col>
                <Col xs="8">
                    <Form>
                        <FormGroup className={styles.form_item}>
                            <Label for="FullName">FULLNAME</Label>
                            <Input type="text" name="name" id="FullName" placeholder="Enter full name here!" />
                        </FormGroup>
                        <FormGroup className={styles.form_item}>
                            <Label for="Email">EMAIL</Label>
                            <Input type="email" name="email" id="Email" placeholder="Enter your email here!" />
                        </FormGroup>
                        <FormGroup className={styles.form_item}>
                            <Label for="PhoneNumber">PHONE NUMBER</Label>
                            <Input type="number" name="phone" id="PhoneNumber" placeholder="Enter your phone number here!" />
                        </FormGroup>
                        <FormGroup className={styles.form_item}>
                            <Label for="Address">ADDRESS</Label>
                            <Input type="text" name="text" id="Address" placeholder="Enter your address here!" />
                        </FormGroup>
                        <Button className={styles.btn}>Place order</Button>
                    </Form>
                </Col>
                <Col xs="4" className={styles.order_panel}>
                    <CardTitle className={`${styles.cart_total_title} h4`}>
                        <strong>YOUR ORDER</strong>
                    </CardTitle>

                    {
                        dataOrder.map((item, index) => (
                            <CardBody
                                key={index}
                                className={`${styles.cart_total_subtotal}`}>
                                <strong>{item.name}</strong>
                                <span className=''>{stringToFormatPrice.format(item.price)} VND X {item.amount}</span>
                            </CardBody>
                        ))
                    }
                    <CardBody className={`${styles.cart_total_subtotal}`}>
                        <strong>TOTAL</strong>
                        <span className=''> {
                            stringToFormatPrice.format(totalOrder())
                        } VND</span>
                    </CardBody>
                </Col>
            </Row>
        </React.Fragment>

    );
}

export default Checkout;
