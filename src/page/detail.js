import React from 'react';
import { Row, Col, CardTitle, CardText, Input, Button, CardImg } from 'reactstrap';
import styles from './module/detail.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from '../store/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { QuantityPicker } from 'react-qty-picker';
import CardProducts from '../component/CardProducts';
import { handleOrderCartAction } from '../store/actionHandleCart';

let stringToFormatPrice = Intl.NumberFormat('en-US');


const Detail = React.memo(() => {
    const dispatch = useDispatch();

    const dataProduct = useSelector(state => state.httpData.data);    // get data from API


    const [amount, setamount] = React.useState('');
    const [dataDetail, setdataDetail] = React.useState('');
    const [dataRelated, setdataRelated] = React.useState('');


    const user = useSelector(state => state.dataUser.onLogin);
    const location = useLocation();
    const search = location.search;
    let getIdProduct = new URLSearchParams(search).get('id');
    let getCategory = new URLSearchParams(search).get('category');
    let navigation = useNavigate();

    // Get data specific Product when click
    const getDataById = () => {
        if (getIdProduct == '') {
            navigation('*');
        } else {
            let data = dataProduct.length != 0 ? dataProduct.filter(item => {
                if (item._id['$oid'] == getIdProduct) {
                    return true;
                }
            }) : '';
            setdataDetail(data);
            handleImage(data[0]?.img1);
            window.scrollTo(0, 0);
        }
    }
    // end

    const [imageSlide, setimageSlide] = React.useState('');

    //get list data related 
    const getProductRelated = () => {
        let data = dataProduct.length != 0 ? dataProduct.filter(item => {
            if (item.category == getCategory) {
                return true;
            }
        }) : '';
        setdataRelated(data);
    }
    // end

    // set image large slide
    const handleImage = (img) => {
        setimageSlide(img)
    }
    // end

    // Order Product
    const handleOrderProduct = () => {
        if (amount != 0) {
            let productAmount = {
                id: dataDetail[0]._id['$oid'],
                name: dataDetail[0].name,
                price: dataDetail[0].price,
                category: dataDetail[0].category,
                img: dataDetail[0].img1,
                short_des: dataDetail[0].short_des,
                long_des: dataDetail[0].long_des,
                amount: amount,
                user: user.nameUser
            }
            dispatch(handleOrderCartAction.ADD_CART(productAmount));
            alert('Order Success');

        } else {
            alert('Invalid order')
        }
    }
    //end


    React.useEffect(() => {
        if (dataDetail.length == 0) {
            dispatch(getAllData());
        }
        getDataById();
        getProductRelated();
    }, [location])

    return (
        <React.Fragment>
            <Row className={styles.product_common}>
                <Col xs='6' className={styles.product_slide}>
                    <Row>
                        <Col xs="2">
                            <Button className={styles.btn_image} onClick={() => handleImage(dataDetail[0]?.img1)}>
                                <CardImg
                                    src={dataDetail[0]?.img1} />
                            </Button>
                            <Button className={styles.btn_image} onClick={() => handleImage(dataDetail[0]?.img2)}>
                                <CardImg
                                    src={dataDetail[0]?.img2} />
                            </Button>
                            <Button className={styles.btn_image} onClick={() => handleImage(dataDetail[0]?.img3)}>
                                <CardImg
                                    src={dataDetail[0]?.img3} />
                            </Button>
                            <Button className={styles.btn_image} onClick={() => handleImage(dataDetail[0]?.img4)}>
                                <CardImg
                                    src={dataDetail[0]?.img4} />
                            </Button>
                        </Col>
                        <Col xs="10">
                            <CardImg
                                src={imageSlide} />
                        </Col>
                    </Row>
                </Col>
                <Col xs='6' className={styles.product_pamas}>
                    <CardTitle className={`${styles.title_pamas} h1`}>
                        <strong>
                            {dataDetail[0]?.name}
                        </strong>
                    </CardTitle>
                    <CardTitle className={`h4 ${styles.price}`}>
                        {stringToFormatPrice.format(dataDetail[0]?.price)} VND
                    </CardTitle>
                    <CardText className={styles.short_des}>
                        {dataDetail[0]?.short_desc}
                    </CardText>
                    <CardTitle className={styles.category}>
                        <strong>CATEGORY</strong>:&nbsp;{dataDetail[0]?.category}
                    </CardTitle>
                    <CardTitle>
                        <CardTitle className={styles.count_area}>
                            <Input placeholder="QUANTITY" type="text" disabled />
                            <QuantityPicker min='0' onChange={(value) => setamount(value)} />
                            <Button onClick={() => handleOrderProduct()}>Add a cart</Button>
                        </CardTitle>
                    </CardTitle>
                </Col>
            </Row>
            <Row className={styles.product_descrption}>
                <CardTitle>
                    <Button className={styles.long_des_btn}>DESCRIPTION</Button>
                </CardTitle>
                <CardTitle className={`h3 ${styles.title_des}`}>
                    <strong> PRODUCT DESCRIPTION</strong>
                </CardTitle>
                <CardText className={``}>
                    <span>
                        {
                            dataDetail[0]?.long_desc
                        }
                    </span>
                </CardText>
            </Row>
            <Row className={styles.product_related}>
                <CardTitle>RELATED PRODUCTS</CardTitle>
                {
                    dataRelated != '' ? dataRelated.map((item, index) => (
                        <Col xs="2">
                            <CardProducts
                                key={index}
                                id={item._id['$oid']}
                                category={item.category}
                                img1={item.img1}
                                name={item.name}
                                price={item.price}
                                memo={true}
                            />
                        </Col>
                    )) : null
                }
            </Row>
        </React.Fragment >
    );
})

export default Detail;
