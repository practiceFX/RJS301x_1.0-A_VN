import React from 'react';
import { Col, ListGroup, ListGroupItem, Row, Button, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './modules/Navbar.module.css';
import { handleUserAction } from '../store/actionUser';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const dispatch = useDispatch();
    const [user, setuser] = React.useState();
    const [islog, setisLog] = React.useState();
    const location = useLocation();
    const getUser = () => {
        let isLogIn = localStorage.getItem('on_login');
        if (isLogIn == null) {
            setuser('');
            setisLog('Sign In');
            isLogIn = JSON.parse(localStorage.getItem('on_login'));
        } else {
            let userCurrent = JSON.parse(isLogIn);
            setuser(userCurrent.nameUser);
            setisLog('Log out')

        }
    }
    const handleLogout = () => {
        dispatch(handleUserAction.ON_LOGOUT());
        setuser('');
        setisLog('Sign In');
    }
    React.useEffect(() => {
        getUser();
    }, [location])

    return (
        <Row className={styles.navbar}>

            {/* Section page menu */}
            <Col xs="6" className={styles.navbar_link}>
                <ListGroup horizontal>
                    <ListGroupItem className={styles.wrapper}>
                        <Link to='' className={styles.link}>
                            Home
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className={styles.wrapper}>
                        <Link to='/shop' className={styles.link}>
                            Shop
                        </Link>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            {/* end */}



            {/* Brand logo  */}
            <Col xs="2">
                <Button
                    color="tranparent"
                    className={styles.brand}>BOUTIQUE</Button>
            </Col>
            {/* end */}



            {/* Section Cart, User */}
            <Col xs="4" >
                <ListGroup horizontal className={styles.user_link}>
                    <ListGroupItem className={styles.wrapper}>
                        <CardTitle>
                            <Link to='/Cart' className={styles.link}>
                                <i className="fas fa-cart-plus"></i> &nbsp;
                                <span>Cart</span>
                            </Link>
                        </CardTitle>
                    </ListGroupItem>
                    {
                        user != '' ? (
                            <ListGroupItem className={styles.wrapper}>
                                <CardTitle>
                                    <Link to='/user' className={styles.link}>
                                        <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                                        <span>{user}</span>&nbsp;
                                        <i class="fa-solid fa-angle-down"></i>
                                    </Link>
                                </CardTitle>
                            </ListGroupItem>
                        ) : null
                    }
                    <ListGroupItem className={styles.wrapper}>
                        <CardTitle>
                            {
                                user != '' ? (
                                    <Button className={styles.link} onClick={() => handleLogout()}>
                                        <span>{islog}</span>
                                    </Button>
                                ) : (
                                    <Link className={styles.link} onClick={() => handleLogout()} to="/login">
                                        <span>{islog}</span>
                                    </Link>
                                )
                            }

                        </CardTitle>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            {/* End */}


        </Row >
    );
}

export default Navbar;


//Sextion navbar 