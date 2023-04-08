import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

import Form from 'react-bootstrap/Form';
import styles from './Login.module.css';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <div className={styles['login-form']}>
            <Form className={styles['form']} method="POST" onSubmit={onSubmit}>
            <h1 className={styles['login-title']}>Login</h1>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={[LoginFormKeys.Email]} value={values[LoginFormKeys.Email]} onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name={[LoginFormKeys.Password]} value={values[LoginFormKeys.Password]} onChange={changeHandler} />
                </Form.Group>
                <Form.Group className={styles['login-button']}>
                <input type="submit" className="btn submit" value="Login" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRegisterRedirect">
                    <p className={styles['register-section']}>
                        <span>You don't have a profile? <Link to="/register" className={styles['register']}>Register</Link></span>
                    </p>
                </Form.Group>
            </Form>
        </div>
    );
};