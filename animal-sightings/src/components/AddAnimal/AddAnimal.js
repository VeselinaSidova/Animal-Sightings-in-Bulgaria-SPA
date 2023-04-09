import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import { useAnimalContext } from '../../contexts/AnimalContext';

import styles from './AddAnimal.module.css';

export const AddAnimal = () => {
    const { onAnimalAddSubmit } = useAnimalContext();
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    const validateFields = (values) => {
        const errors = {};

        // Animal name validation
        if (!values.animalName) {
            errors.animalName = 'Name is required';
        }

        // Latin name validation
        if (!values.latinName) {
            errors.latinName = 'Latin name is required';
        }

        // Habitat validation
        if (!values.habitat) {
            errors.habitat = 'Habitat is required';
        }

        // Habitat in Bulgaria validation
        if (!values.habitatBg) {
            errors.habitatBg = 'Habitat in Bulgaria is required';
        }

        // Locations in Bulgaria validation
        if (!values.locationBg) {
            errors.locationBg = 'Locations in Bulgaria are required';
        }

        // Mass validation
        if (!values.mass) {
            errors.mass = 'Mass is required';
        }

        // Image URL validation
        if (!values.imageUrl) {
            errors.imageUrl = 'Image URL is required';
        }

        // Description validation
        if (!values.description) {
            errors.description = 'Description is required';
        }

        return errors;
    };

    const { values, errors, changeHandler, onSubmit } = useForm({
        animalName: '',
        latinName: '',
        animalClass: 'mammals',
        habitat: '',
        habitatBg: '',
        locationBg: '',
        foodPreference: 'Carnivore',
        mass: '',
        imageUrl: '',
        description: '',
    },
        onAnimalAddSubmit,
        validateFields,
    );

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, []);


    return (
        <section className={styles['add-animal-section']} >
            <form className={styles['add-animal']} method="POST" onSubmit={onSubmit}>
                <h1>Add Animal</h1>
                <label htmlFor="animal-name">Name:</label>
                <input value={values.animalName} onChange={changeHandler} type="text" id="animalName" name="animalName" placeholder="Brown Bear" />
                {errors.animalName && <p className={styles['error']}>{errors.animalName}</p>}

                <label htmlFor="latin-name">Latin name:</label>
                <input value={values.latinName} onChange={changeHandler} type="text" id="latinName" name="latinName" placeholder="Ursus arctos" />
                {errors.animalName && <p className={styles['error']}>{errors.latinName}</p>}

                <div className={styles['animal-class']}>
                    <label htmlFor="animal-class">Class:</label>
                    <select value={values.animalClass} onChange={changeHandler} id="animalClass" name="animalClass">
                        <option value="Mammals">Mammals</option>
                        <option value="Birds">Birds</option>
                        <option value="Fish">Fish</option>
                        <option value="Reptiles">Reptiles</option>
                        <option value="Amphibians">Amphibians</option>
                        <option value="Insects">Insects</option>
                        <option value="Invertebrates">Invertebrates</option>
                    </select>
                </div>

                <label htmlFor="habitat">Habitat:</label>
                <input value={values.habitat} onChange={changeHandler} type="text" id="habitat" name="habitat" placeholder="Forest, Tundra" />
                {errors.animalName && <p className={styles['error']}>{errors.habitat}</p>}

                <label htmlFor="habitat-bg">Habitat in Bulgaria:</label>
                <input value={values.habitatBg} onChange={changeHandler} type="text" id="habitatBg" name="habitatBg" placeholder="Forest" />
                {errors.animalName && <p className={styles['error']}>{errors.habitatBg}</p>}

                <label htmlFor="location-bg">Locations in Bulgaria:</label>
                <input value={values.locationBg} onChange={changeHandler} type="text" id="locationBg" name="locationBg" placeholder="Rila, Pirin, Balkan" />
                {errors.animalName && <p className={styles['error']}>{errors.locationBg}</p>}

                <div className={styles['food-preference']}>
                    <label>Food preference:</label>
                    <div className={styles['food-preference-options']}>
                        <label htmlFor="carnivore">Carnivore</label>
                        <input type="radio" name="foodPreference" id="carnivore" value="Carnivore" onChange={changeHandler} checked={values.foodPreference === 'Carnivore'} />
                        <label htmlFor="herbivore">Herbivore</label>
                        <input type="radio" name="foodPreference" id="herbivore" value="Herbivore" onChange={changeHandler} checked={values.foodPreference === 'Herbivore'} />
                        <label htmlFor="omnivore">Omnivore</label>
                        <input type="radio" name="foodPreference" id="omnivores" value="Omnivore" onChange={changeHandler} checked={values.foodPreference === 'Omnivore'} />
                    </div>
                </div>

                <label htmlFor="mass">Mass:</label>
                <input value={values.mass} onChange={changeHandler} type="text" id="mass" name="mass" placeholder="400-600 kg" />
                {errors.animalName && <p className={styles['error']}>{errors.mass}</p>}

                <label htmlFor="animal-img">Image:</label>
                <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Paste image URL" />
                {errors.animalName && <p className={styles['error']}>{errors.imageUrl}</p>}

                <label htmlFor="description">Description:</label>
                <textarea value={values.description} onChange={changeHandler} id="description" name="description" cols="40" rows="10" placeholder="The brown bear is..."></textarea>
                {errors.animalName && <p className={styles['error']}>{errors.description}</p>}

                <input className={styles['btn-submit']} type="submit" value="Add Animal" />
            </form>
        </section>
    );
};