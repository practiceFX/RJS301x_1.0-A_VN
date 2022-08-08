import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardBody, CardTitle, Form, FormGroup, Row } from 'reactstrap';
import styles from './module/signin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { handleUserAction } from '../store/actionUser';

const Register = () => {
    const navigation = useNavigate();
    const fullname = React.useRef();
    const email = React.useRef();
    const password = React.useRef();
    const phone = React.useRef();
    const dispatch = useDispatch();
    // get the list user Registered
    const dataUser = useSelector(state => state.dataUser.users);
    // end


    // check data User validated
    const isValidated = () => {
        const isfullname = fullname.current.value == '' ? false : true;
        const isEmail = email.current.value.includes('@');
        const ispassword = password.current.value == '' ? false : true;
        const isphone = isNaN(parseInt(phone.current.value)) == true ? false : true;
        if (isfullname == false) { alert('Invvalid FullName') }
        if (isEmail == false) { alert('Invvalid Email') }
        if (ispassword == false) { alert('Invaild password') }
        if (isphone == false) { alert('Invalid Phone') }
        if (
            isfullname == true &&
            isEmail == true &&
            ispassword == true &&
            isphone == true
        ) {
            return true;
        }
    }
    // end 

    // check user have exist in list 
    const checkUserData = () => {
        const dataUserCheck = dataUser.filter((item) => {
            if (
                item.fullName == fullname &&
                item.nameUser == email &&
                item.passUser == password &&
                item.phoneUser == phone
            ) {
                return true
            }
        })
        if (dataUserCheck.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    //end

    // Add user in the list Users
    const handleSignUp = () => {
        if (isValidated() == true && checkUserData() == true) {
            let user = {
                fullname: fullname.current.value,
                nameUser: email.current.value,
                passUser: password.current.value,
                phoneUser: phone.current.value
            }
            dispatch(handleUserAction.ADD_USER(user));
            alert('Success!!!');
            navigation('/login');
        }
    }
    // End


    return (
        <CardBody className={styles.sign_in} style={{ background: 'url(https://www.apple.com/v/iphone/buy/i/images/meta/og__fdbmon7f382m.jpg?202203240659)' }}>
            <Row className={styles.inner_sign_up}>
                <Form>
                    <CardTitle className={`h3 ${styles.title}`}>
                        <strong>
                            Sign Up
                        </strong>
                    </CardTitle>
                    <FormGroup className={`${styles.input}`} >
                        <input type='text' placeholder='Full Name' ref={fullname} />
                    </FormGroup>
                    <FormGroup className={`${styles.input}`}>
                        <input type='email' placeholder='Email' ref={email} />
                    </FormGroup>
                    <FormGroup className={`${styles.input}`}>
                        <input type='password' placeholder='Password' ref={password} />
                    </FormGroup>
                    <FormGroup className={`${styles.input}`}>
                        <input type='text' placeholder='Phone' ref={phone} />
                    </FormGroup>
                    <Button className={styles.button} onClick={() => handleSignUp()}>SIGN UP</Button>
                    <CardTitle className={`text-center ${styles.link}`}>
                        Login? <Link to='/login'> Click </Link>
                    </CardTitle>
                </Form>
            </Row>
        </CardBody >
    );
}

export default Register;
