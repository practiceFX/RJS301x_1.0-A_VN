import React from 'react';
import { CardTitle, Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../store/api';
import CardProducts from './CardProducts';
import CardPopup from './CardPopup';


const TopProduct = () => {
    const dispatch = useDispatch();

    // Get data product in API
    const dataProduct = useSelector(state => state.httpData.data);


    const [pos, setPos] = React.useState(''); //get index of array Product
    const [activePopup, setactivePopup] = React.useState(false); // show or hide page-popup

    //show page-papup when click item of the list top-product
    const handleClick = (index) => {
        setPos(index)
        setactivePopup(true);
    }
    // end

    //hide page-popup whne click outside 
    const handleClickOutside = () => {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('card-popup')) {
                setactivePopup(false);
            }

        })
    }
    // end




    React.useEffect(() => {
        if (dataProduct.length == 0) {
            dispatch(getAllData());
        }
        handleClickOutside();
    }, [])


    return (
        <React.Fragment>

            {/* The list Product */}
            <Row>
                <Col xs="12">
                    <CardTitle className={`h4 text-center`}>MAKE THE HARD WAY</CardTitle>
                    <CardTitle className={`h1 text-center font-weight-bold`}>
                        <strong>TOP TRENDING PRODUCTS</strong>
                    </CardTitle>
                </Col>
                {
                    dataProduct.length == 0 ? null : dataProduct.map((item, index) => (
                        <Col xs="3" key={index}>
                            <CardProducts
                                id={item._id['$oid']}
                                category={item.category}
                                img1={item.img1}
                                name={item.name}
                                price={item.price}
                                link={false}
                                onClick={() => handleClick(index)}
                                memo={true}
                            />
                        </Col >
                    ))
                }
            </Row>
            {/* End */}



            {/* The Page Popup when click  */}
            <CardPopup
                img={dataProduct[pos]?.img1}
                title={dataProduct[pos]?.name}
                short_des={dataProduct[pos]?.short_desc}
                id={dataProduct[pos]?._id['$oid']}
                category={dataProduct[pos]?.category}
                active={activePopup}
            />
            {/* end */}


        </React.Fragment>
    );
}

export default TopProduct;

// Card product view in page home and shop
