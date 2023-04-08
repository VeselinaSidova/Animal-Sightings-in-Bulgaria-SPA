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
    const validateFields = (values) => {
        const errors = {};

        // Email validation
        if (!values[LoginFormKeys.Email]) {
            errors[LoginFormKeys.Email] = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values[LoginFormKeys.Email])) {
            errors[LoginFormKeys.Email] = 'Email is invalid';
        }

        // Password validation
        if (!values[LoginFormKeys.Password]) {
            errors[LoginFormKeys.Password] = 'Password is required';
        }
        return errors;
    };
    
    const { values, errors, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    },
        onLoginSubmit,
        validateFields
    );

    return (
        <div className={styles['login-form']}>
            <Form className={styles['form']} method="POST" onSubmit={onSubmit}>
                <h1 className={styles['login-title']}>Login</h1>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name={LoginFormKeys.Email}
                        value={values[LoginFormKeys.Email]}
                        onChange={changeHandler}
                        isInvalid={errors[LoginFormKeys.Email]}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors[LoginFormKeys.Email]}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={changeHandler}
                        isInvalid={errors[LoginFormKeys.Password]}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors[LoginFormKeys.Password]}
                    </Form.Control.Feedback>
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