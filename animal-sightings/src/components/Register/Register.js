import Form from 'react-bootstrap/Form';
import styles from './Register.module.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';


export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const validateFields = (values) => {
        const errors = {};

        // First name validation
        if (!values.firstName) {
            errors.firstName = 'First name is required';
        }

        // Last name validation
        if (!values.lastName) {
            errors.lastName = 'Last name is required';
        }

        // Email validation
        if (!values.email) {
            errors.email = 'Email is required';
        } else {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(values.email)) {
                errors.email = 'Invalid email format';
            }
        }

        // Password validation
        if (!values.password) {
            errors.password = 'Password is required';
        }

        // Confirm password validation
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };

    const { values, errors, changeHandler, onSubmit } = useForm(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onRegisterSubmit,
        validateFields
    );

    return (
        <div className={styles['register-form']}>
            <Form className={styles['form']} method="POST" onSubmit={onSubmit}>
                <h1 className={styles['register-title']}>Register</h1>
                <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>Fisrt Name</Form.Label>
                    <Form.Control type="name" name="firstName" placeholder="John" value={values.firstName} onChange={changeHandler} isInvalid={!!errors.firstName} />
                    <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" name="lastName" placeholder="Smith" value={values.lastName} onChange={changeHandler} isInvalid={!!errors.lastName} />
                    <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" value={values.email} onChange={changeHandler} isInvalid={!!errors.email} />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" value={values.password} onChange={changeHandler} isInvalid={!!errors.password} />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="Re-enter password" value={values.confirmPassword} onChange={changeHandler} isInvalid={!!errors.confirmPassword} />
                    <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
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
        </div >
    );
};