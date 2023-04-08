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
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        animalId,
        location: '',
        date: '',
        note: '',
    }, onSightingEditSubmit);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, []);

    useEffect(() =>{
        sightingSevice.getOne(sightingId)
            .then(result => {
                changeValues(result);
            });
    }, [sightingId]);

    return (
        <div className={styles['add-sighting']}>
            <label>Add to My Sighted Animals:</label>
            <form className={styles['add-sightings-form']} method="POST" onSubmit={onSubmit}>
                <input value={values.location} onChange={changeHandler} type="text" name="location" placeholder="Rila" />
                <input value={values.date} onChange={changeHandler} type="date" name="date" />
                <textarea maxLength={120} value={values.note} onChange={changeHandler} name="note" placeholder="Add note" ></textarea>
                <input className={styles['btn-submit']} type="submit" value="Edit" />
            </form>
        </div>
    );
}