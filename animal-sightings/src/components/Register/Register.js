import Form from 'react-bootstrap/Form';
import styles from './Register.module.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';


export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <div className={styles['register-form']}>
            <Form className={styles['form']} method="POST" onSubmit={onSubmit}>
                <h1 className={styles['register-title']}>Register</h1>
                <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>Fisrt Name</Form.Label>
                    <Form.Control type="name" name="firstName" placeholder="John" value={values.firstName} onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" name="lastName" placeholder="Smith" value={values.lastName} onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" value={values.email} onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" value={values.password} onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="Re-enter password" value={values.confirmPassword} onChange={changeHandler} />
                </Form.Group>
                <Form.Group className={styles['register-button']}>
                    <input type="submit" className="btn submit" value="Register" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLoginRedirect">
                    <p className={styles['login-section']}>
                        <span>You already have a profile? <Link to="/login" className={styles['login']}>Login</Link></span>
                    </p>
                </Form.Group>
            </Form>
        </div>
    );
};