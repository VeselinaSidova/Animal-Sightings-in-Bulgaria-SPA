import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useService } from "../../hooks/useService";
import { AuthContext } from '../../contexts/AuthContext';
import { useSightingContext } from "../../contexts/SightingContext";
import { sightingsServiceFactory } from '../../services/sightingsService';

import styles from './EditSightedAnimal.module.css';

export const EditSightedAnimal = () => {
    const { onSightingEditSubmit } = useSightingContext();
    const { animalId, sightingId } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const sightingSevice = useService(sightingsServiceFactory);
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

    const { values, changeHandler, onSubmit, changeValues, errors } = useForm({
        _id: '',
        animalId,
        location: '',
        date: '',
        note: '',
    }, onSightingEditSubmit, validateFields);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        sightingSevice.getOne(sightingId)
            .then(result => {
                changeValues(result);
            });
    }, [sightingId]);

    return (
        <div className={styles['edit-sighting']}>
            <label>Edit Sighted Animal:</label>
            <form className={styles['edit-sightings-form']} method="POST" onSubmit={onSubmit}>
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
                <input className={styles['btn-submit']} type="submit" value="Edit" />
            </form>
        </div>
    );
}