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
    const { values, changeHandler, onSubmit } = useForm({
        animalId,
        location: '',
        date: '',
        note: '',
    }, onSightingAddSubmit);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, []);

    return (
        <div className={styles['add-sighting']}>
            <label>Add to My Sighted Animals:</label>
            <form className={styles['add-sightings-form']} method="POST" onSubmit={onSubmit}>
                <input value={values.location} onChange={changeHandler} type="text" name="location" placeholder="Rila" />
                <input value={values.date} onChange={changeHandler} type="date" name="date" />
                <textarea maxLength={120} value={values.note} onChange={changeHandler} name="note" placeholder="Add note" ></textarea>
                <input className={styles['btn-submit']} type="submit" value="Add" />
            </form>
        </div>
    );
};