import { useState } from 'react';

import styles from './AddAnimal.module.css';

export const AddAnimal = ({
    onAnimalAddSubmit,
}) => {
    const [values, setValues] = useState ({
        animalName: '',
        latinName: '',
        animalClass: 'mammals',
        habitat: '',
        habitatBg: '',
        locationBg: '',
        foodPreference: 'carnivores',
        mass: '',
        imageUrl: '',
        description: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onAnimalAddSubmit(values);
    };

    return (
        <section className={styles['add-animal-section']} >
            <form className={styles['add-animal']} onSubmit={onSubmit}>
                <h1>Add Animal</h1>
                <label htmlFor="animal-name">Name:</label>
                <input value={values.animalName} onChange={onChangeHandler} type="text" id="animalName" name="animalName" placeholder="Brown Bear" />

                <label htmlFor="latin-name">Latin name:</label>
                <input value={values.latinName} onChange={onChangeHandler} type="text" id="latinName" name="latinName" placeholder="Ursus arctos" />

                <div className={styles['animal-class']}>
                    <label htmlFor="animal-class">Class:</label>
                    <select value={values.animalClass} onChange={onChangeHandler} id="animalClass" name="animalClass">
                        <option value="mammals">Mammals</option>
                        <option value="birds">Birds</option>
                        <option value="fish">Fish</option>
                        <option value="reptiles">Reptiles</option>
                        <option value="amphibians">Amphibians</option>
                        <option value="insects">Insects</option>
                        <option value="invertebrates">Invertebrates</option>
                    </select>
                </div>

                <label htmlFor="habitat">Habitat:</label>
                <input value={values.habitat} onChange={onChangeHandler} type="text" id="habitat" name="habitat" placeholder="Forest, Tundra" />

                <label htmlFor="habitat-bg">Habitat in Bulgaria:</label>
                <input value={values.habitatBg} onChange={onChangeHandler} type="text" id="habitatBg" name="habitatBg" placeholder="Forest" />

                <label htmlFor="location-bg">Locations in Bulgaria:</label>
                <input value={values.locationBg} onChange={onChangeHandler} type="text" id="locationBg" name="locationBg" placeholder="Rila, Pirin, Balkan" />

                <div className={styles['food-preference']}>
                    <label>Food preference:</label>
                    <div className={styles['food-preference-options']}>
                        <label htmlFor="carnivores">Carnivores</label>
                        <input type="radio" name="foodPreference" id="carnivores" value="carnivores" onChange={onChangeHandler} checked={values.foodPreference === 'carnivores'}/>
                        <label htmlFor="herbivores">Herbivores</label>
                        <input type="radio" name="foodPreference" id="herbivores" value="herbivores" onChange={onChangeHandler} checked={values.foodPreference === 'herbivores'}/>
                        <label htmlFor="omnivores">Omnivores</label>
                        <input type="radio" name="foodPreference" id="omnivores" value="omnivores" onChange={onChangeHandler} checked={values.foodPreference === 'omnivores'}/>
                    </div>
                </div>

                <label htmlFor="mass">Mass:</label>
                <input value={values.mass} onChange={onChangeHandler} type="text" id="mass" name="mass" placeholder="400-600 kg" />

                <label htmlFor="animal-img">Image:</label>
                <input value={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Paste image URL" />

                <label htmlFor="description">Description:</label>
                <textarea value={values.description} onChange={onChangeHandler} id="description" name="description" cols="40" rows="10" placeholder="The brown bear is..."></textarea>

                <input className={styles['btn-submit']} type="submit" value="Add Animal" />
            </form>
        </section>
    );
};