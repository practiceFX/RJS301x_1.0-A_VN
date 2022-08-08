import React from 'react';
import styles from './modules/Banner.module.css';
import { Link } from 'react-router-dom';
import { CardBody, CardTitle } from 'reactstrap';


const Banner = () => {
    return (
        <div>
            <CardBody className={styles.banner} >
                <div className={styles.inner_banner} style={{ backgroundImage: 'url(./assets/images/banner.png)' }}>
                    <CardBody className={styles.text_banner} >
                        <CardTitle className={`${styles.text_child} h6 my-3`}>NEW INSPIRATION 2022</CardTitle>
                        <CardTitle className={`${styles.text_title} h1 my-3`}>20% OFF ON NEW <br></br>SEASON</CardTitle>
                        <Link to='/shop' className={styles.link}>
                            <div className={styles.button_banner}>
                                Browse collections
                            </div>
                        </Link>
                    </CardBody>
                </div>

            </CardBody >
        </div >
    );
}

export default Banner;


/// Section Banner of page home 