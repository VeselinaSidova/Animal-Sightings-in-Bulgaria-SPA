import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import { useSightingContext } from "../../contexts/SightingContext";

import styles from './AddSightedAnimal.module.css';

export const AddSightedAnimal = () => {
    const { onSightingAddSubmit } = useSightingContext();
    const { animalId } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const validateFields = (values) => {
        const errors = {};

        // Location validation
        if (!values.location) {
            errors.location = 'Location is required';
        }

        // Date validation
        if (!values.date) {
            errors.date = 'Date is required';
        }

        return errors;
    };
    const { values, errors, changeHandler, onSubmit } = useForm(
        {
            animalId,
            location: '',
            date: '',
            note: '',
        },
        onSightingAddSubmit,
        validateFields
    );

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, []);

    return (
        <div className={styles['add-sighting']}>
            <label>Add to My Sighted Animals:</label>
            <form className={styles['add-sightings-form']} method="POST" onSubmit={onSubmit}>
                <input
                    value={values.location}
                    onChange={changeHandler}
                    type="text"
                    name="location"
                    placeholder="Rila"
                    className={errors.location ? styles['input-error'] : ''}
                />
                {errors.location && <span className={styles['error-message']}>{errors.location}</span>}
                <input
                    value={values.date}
                    onChange={changeHandler}
                    type="date"
                    name="date"
                    className={errors.date ? styles['input-error'] : ''}
                />
                {errors.date && <span className={styles['error-message']}>{errors.date}</span>}
                <textarea
                    maxLength={120}
                    value={values.note}
                    onChange={changeHandler}
                    name="note"
                    placeholder="Add note"
                ></textarea>
                <input className={styles['btn-submit']} type="submit" value="Add" />
            </form>
        </div>
    );
};