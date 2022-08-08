import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, CardBody, CardTitle, Form, FormGroup, Row } from 'reactstrap';
import { handleUserAction } from '../store/actionUser';
import styles from './module/signin.module.css';


const Login = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const dataUser = useSelector(state => state.dataUser.users);
    const email = React.useRef();
    const password = React.useRef();



    const handleSumbit = () => {
        // get data User log in
        const dataCurrent = dataUser.filter(item => {
            if (item.nameUser == email.current.value && item.passUser == password.current.value) {
                return true;
            }
        })
        // end
        // Check user have exsit in the list user register
        if (dataCurrent.length > 0) {
            dispatch(handleUserAction.ON_LOGIN(dataCurrent[0]));
            navigation('/?confirm=true');
        } else {
            alert('You have not register')
        }
        // end

    }

    return (
        <CardBody className={styles.sign_in} style={{ background: 'url(https://www.apple.com/v/iphone/buy/i/images/meta/og__fdbmon7f382m.jpg?202203240659)' }}>
            <Row className={styles.inner_sign_up}>
                <Form>
                    <CardTitle className={`h3 ${styles.title}`}>
                        <strong>
                            Sign In
                        </strong>
                    </CardTitle>
                    <FormGroup className={`${styles.input}`}>
                        <input type='email' placeholder='Email' ref={email} />
                    </FormGroup>
                    <FormGroup className={`${styles.input}`}>
                        <input type='password' placeholder='Password' ref={password} />
                    </FormGroup>
                    <Button className={styles.button} onClick={() => handleSumbit()} > SIGN IN</Button>
                    <CardTitle className={`text-center ${styles.link}`}>
                        Create an account? <Link to='/register'> Sign up </Link>
                    </CardTitle>
                </Form>
            </Row>
        </CardBody >
    );
}

export default Login;
