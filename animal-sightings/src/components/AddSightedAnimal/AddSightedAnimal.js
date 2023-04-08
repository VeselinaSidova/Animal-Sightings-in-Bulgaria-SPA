import { useParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';

import styles from './AddSightedAnimal.module.css';

export const AddSightedAnimal = ({
    onSightingAddSubmit,
}) => {
    const { animalId } = useParams();
    const { values, changeHandler, onSubmit } = useForm ({
        animalId,
        location: '',
        date: '',
        note: '',
    }, onSightingAddSubmit);

    return (
        <div className={styles['add-sighting']}>
            <label>Add to My Sighted Animals:</label>
            <form className={styles['add-sightings-form']} method="POST" onSubmit={onSubmit}>
                <input value={values.location} onChange={changeHandler} type="text" name="location" placeholder="Rila" />
                <input value={values.date} onChange={changeHandler} type="date" name="date" />
                <textarea value={values.note} onChange={changeHandler} name="note" placeholder="Add note" ></textarea>
                <input className={styles['btn-submit']} type="submit" value="Add" />
            </form>
        </div>
    );
};