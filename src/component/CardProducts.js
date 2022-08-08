import React from 'react';
import styles from './modules/CardProducts.module.css';
import { Card, CardImg, CardTitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom';

let stringToFormatPrice = Intl.NumberFormat('en-US');
const CardProducts = React.memo(props => {
    // console.log('reder..');
    return (
        <Card className={styles.card_product}>
            {
                props.link == false ? (
                    // in home page
                    <Button className={styles.link} onClick={props.onClick} >
                        <CardImg src={props.img1} />
                        <CardTitle className={`${props.size == '' ? 'h4' : 'h6'} ${styles.title}`}><strong>{props.name}</strong></CardTitle>
                        <CardTitle className={`h6 ${styles.price}`}>{stringToFormatPrice.format(props.price)} VND</CardTitle>
                    </Button>

                    // end
                ) : (
                    // in shop page
                    <Link to={`/detail/apple?id=${props.id}&category=${props.category}`} className={styles.link}>
                        <CardImg src={props.img1} />
                        <CardTitle className={`${props.size == '' ? 'h4' : 'h6'} ${styles.title}`}><strong>{props.name}</strong></CardTitle>
                        <CardTitle className={`h6 ${styles.price}`}>{stringToFormatPrice.format(props.price)} VND</CardTitle>
                    </Link>
                    // end
                )
            }

        </Card >
    );
})

export default CardProducts;



// Card product view in page home and shop
