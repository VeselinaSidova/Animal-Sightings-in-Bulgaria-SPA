import Form from 'react-bootstrap/Form';
import styles from './Login.module.css';

export const Login = () => {
    return (
        <div className={styles['login-form']}>
            <Form className={styles['form']}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
        </div>
    );
};