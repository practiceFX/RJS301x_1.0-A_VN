import React from 'react';
import styles from './modules/ListProduct.module.css';
import { Col, Input, Row } from 'reactstrap';
import CardProducts from './CardProducts';


const ListProduct = props => {
    return (
        <Col xs="12" lg="9" className={styles.products}>
            <Row className={styles.top_tabPanel}>
                <Col xs="6" className={styles.search_box}>
                    <Input placeholder='Enter Search Here' />
                </Col>
                <Col xs="6" className={styles.sort_select}>
                    <select>
                        <option>Default sorting</option>
                        <option>ASC</option>
                        <option>DES</option>
                    </select>
                </Col>
            </Row>
            <Row className={styles.list_product}>
                {
                    props.dataCategories != '' ? props.dataCategories.map((item, index) => (
                        <Col xs="4" key={index}>
                            <CardProducts
                                id={item._id['$oid']}
                                category={item.category}
                                img1={item.img1}
                                name={item.name}
                                price={item.price}
                                size='true'
                                link={true}
                            />
                        </Col>
                    )) : null
                }
            </Row>
        </Col>
    );
}

export default ListProduct;

// Section ListProduct of the page home
