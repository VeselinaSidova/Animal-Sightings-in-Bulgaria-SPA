import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { AuthContext } from '../../contexts/AuthContext';
import { useAnimalContext } from "../../contexts/AnimalContext";
import { animalServiceFactory } from "../../services/animalService";

import styles from './EditAnimal.module.css';

export const EditAnimal = () => {
    const { onAnimalEditSubmit } = useAnimalContext();
    const { animalId } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const animalSevice = useService(animalServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
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
    }, onAnimalEditSubmit);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, []);

    useEffect(() =>{
        animalSevice.getOne(animalId)
            .then(result => {
                changeValues(result);
            });
    }, [animalId]);

    return (
        <section className={styles['edit-animal-section']} >
            <form className={styles['edit-animal']} method="POST" onSubmit={onSubmit}>
                <h1>Edit Animal</h1>
                <label htmlFor="animal-name">Name:</label>
                <input value={values.animalName} onChange={changeHandler} type="text" id="animalName" name="animalName" placeholder="Brown Bear" />

                <label htmlFor="latin-name">Latin name:</label>
                <input value={values.latinName} onChange={changeHandler} type="text" id="latinName" name="latinName" placeholder="Ursus arctos" />

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

                <label htmlFor="habitat-bg">Habitat in Bulgaria:</label>
                <input value={values.habitatBg} onChange={changeHandler} type="text" id="habitatBg" name="habitatBg" placeholder="Forest" />

                <label htmlFor="location-bg">Locations in Bulgaria:</label>
                <input value={values.locationBg} onChange={changeHandler} type="text" id="locationBg" name="locationBg" placeholder="Rila, Pirin, Balkan" />

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

                <label htmlFor="animal-img">Image:</label>
                <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Paste image URL" />

                <label htmlFor="description">Description:</label>
                <textarea value={values.description} onChange={changeHandler} id="description" name="description" cols="40" rows="10" placeholder="The brown bear is..."></textarea>

                <input className={styles['btn-submit']} type="submit" value="Save Changes" />
            </form>
        </section>
    );
};