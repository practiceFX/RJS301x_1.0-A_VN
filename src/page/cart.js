import React from 'react';
import { Table, Row, Col, CardTitle, CardImg, CardBody, Input, Button } from 'reactstrap';
import BannerPage from '../component/BannerPage';
import styles from './module/Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { QuantityPicker } from 'react-qty-picker';
import { handleOrderCartAction } from '../store/actionHandleCart';
import { Link } from 'react-router-dom'


let stringToFormatPrice = Intl.NumberFormat('en-US');
const Cart = () => {
    // get data in local storage
    let dataOrder = useSelector(state => state.orderCart.product);
    let user = useSelector(state => state.dataUser.onLogin);
    // end 


    const [dataUserOrder, setdataUserOrder] = React.useState('');
    const navigation = useNavigate();
    const dispatch = useDispatch();


    // Modify and Update order
    const handleUpdateOrder = (item, value, index) => {
        const obj = { ...item }
        obj.amount = value;
        let data = [...dataOrder]
        data[index] = obj;
        dispatch(handleOrderCartAction.UPDATE_CART(data))
    }
    // end 

    // order total cost
    const totalOrder = () => {
        let sum = 0;
        dataOrder.map((item) => {
            sum = sum + parseInt(item.price) * parseInt(item.amount)
        })
        return sum;
    }
    // end

    //redirect on page checkout
    const handleCheckout = () => {
        if (dataOrder.length > 0) {
            navigation('/checkout')
        }
    }
    // end

    // Get specific orders for each user
    const getDataUser = () => {
        const dataFilter = dataOrder.filter((item) => {
            if (item.user == user.nameUser) {
                return true
            }
        })
        setdataUserOrder(dataFilter);
    }
    //end


    // remove product from order
    const handleDelete = (index) => {
        dispatch(handleOrderCartAction.DELETE_CART(index))
        let temporary = dataUserOrder;
        temporary.splice(index, 1);
        setdataUserOrder(temporary);
    }
    // end

    React.useEffect(() => {
        getDataUser()
    }, [])
    return (
        <React.Fragment>
            <BannerPage title='CART' url='' />

            <Row className={styles.cart}>
                <Col xs="12">
                    <CardTitle className={`${styles.title} h3`}>
                        <strong>
                            SHOPPING CART
                        </strong>
                    </CardTitle>
                </Col>
                <Col xs="9">
                    <Table borderless className={styles.table}>
                        <thead>
                            <tr>
                                <th>IMAGE</th>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                                <th>REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataUserOrder != '' ?
                                dataUserOrder.map((item, index) => (
                                    <tr key={index}>
                                        <th><CardImg
                                            src={item.img}
                                            className={styles.img_product} />
                                        </th>
                                        <th>
                                            <CardTitle>
                                                {
                                                    item?.name
                                                }
                                            </CardTitle>
                                        </th>
                                        <th>
                                            <CardTitle>
                                                {
                                                    stringToFormatPrice.format(item.price)
                                                }
                                            </CardTitle>
                                        </th>
                                        <th>
                                            <CardTitle className={styles.count_area}>
                                                <QuantityPicker min='0' value={item.amount} onChange={(value) => handleUpdateOrder(item, value, index)} />
                                            </CardTitle>
                                        </th>
                                        <th>
                                            <CardTitle>
                                                {
                                                    stringToFormatPrice.format(parseInt(item.price) * parseInt(item.amount))
                                                } VND
                                            </CardTitle>
                                        </th>
                                        <th>
                                            <CardTitle>
                                                <Button className={styles.btn_delete} onClick={() => handleDelete(index)}>
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                </Button>
                                            </CardTitle>
                                        </th>
                                    </tr>)
                                ) : null
                            }

                        </tbody>
                    </Table>
                </Col>
                <Col xs="3">
                    <CardTitle className={`${styles.cart_total_title} h4`}>
                        <strong>CART TOTAL</strong>
                    </CardTitle>
                    <CardBody className={`${styles.cart_total_subtotal}`}>
                        <strong>SUBTOTAL</strong>
                        <span>{
                            stringToFormatPrice.format(totalOrder())
                        } VND</span>
                    </CardBody>
                    <CardBody className={`${styles.cart_total_total}`}>
                        <strong>TOTAL</strong>
                        <span className='h5'>{
                            stringToFormatPrice.format(totalOrder())
                        } VND</span>
                    </CardBody>
                    <CardTitle className={styles.count_area}>
                        <Input placeholder="Enter your coupon" />
                    </CardTitle>
                    <CardTitle>
                        <Button className={styles.button_applyCoupon}>
                            <i class="fa fa-gift" aria-hidden="true"></i>&nbsp;
                            Apply coupon
                        </Button>
                    </CardTitle>
                </Col>
                <Col xs="6" className='mt-5'>
                    <Link className={styles.btn_shopping} to="/shop">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;
                        <span className='h5 pl-5'>Continute shopping</span>
                    </Link>
                </Col>
                <Col xs="6" className='mt-5'>
                    <Button className={styles.btn_checkout} onClick={handleCheckout}>
                        <span className='h6 pl-5'>Proceed to checkout</span>&nbsp;&nbsp;
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Cart;
