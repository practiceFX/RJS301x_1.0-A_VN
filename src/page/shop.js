import React from 'react';
import { Row } from 'reactstrap';
import ListProduct from '../component/ListProduct';
import SideBar from '../component/SideBar';
import styles from './module/shop.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { getAllData } from '../store/api';
import BannerPage from '../component/BannerPage';






const Shop = () => {
    const dispatch = useDispatch();
    // get data from API
    const dataDetailProduct = useSelector(state => state.httpData.data);
    // end
    let location = useLocation();
    let categories = new URLSearchParams(location.search).get('categories');
    let [dataCategories, setdataCategory] = React.useState('');
    let navigate = useNavigate();

    // default render all product
    const handleUrl = () => {
        if (location.search == '') {
            navigate('/shop/apple?categories=all');
        }
    }
    // end


    // get data by category
    const getDataCategories = () => {
        if (categories == 'all' || categories == '') {
            setdataCategory(dataDetailProduct);
        }
        else {
            let data = dataDetailProduct != '' ? dataDetailProduct.filter(item => { if (item.category == categories) { return true } }) : '';
            setdataCategory(data);
        }
    }
    // end



    React.useEffect(() => {
        if (dataDetailProduct.length == 0) {
            dispatch(getAllData());
            setdataCategory(dataDetailProduct);
            getDataCategories();
        }
        getDataCategories();
        handleUrl();
    }, [location])
    return (
        <React.Fragment>
            <BannerPage title='SHOP' />
            <Row className={styles.AllProduct}>
                <SideBar onClick />
                <ListProduct
                    memo={true}
                    dataCategories={dataCategories}
                />
            </Row>
        </React.Fragment >
    );
}

export default Shop;
