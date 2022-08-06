import React from 'react';
import Banner from '../component/Banner';
import Category from '../component/Category';
import ContactInfor from '../component/ContactInfor';
import TopProduct from '../component/TopProduct';

const Home = () => {
    return (
        <React.Fragment>
            <Banner />
            <Category />
            <TopProduct />
            <ContactInfor />
        </React.Fragment>
    );
}

export default Home;
