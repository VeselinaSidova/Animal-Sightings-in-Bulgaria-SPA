import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { animalServiceFactory } from '../services/animalService';

export const AnimalContext = createContext();

export const AnimalProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [animals, setAnimals] = useState([]);
    const animalService = animalServiceFactory();

    useEffect(() => {
        animalService.getAll()
            .then(result => {
                setAnimals(result);
            });
    }, []);

    const onAnimalAddSubmit = async (data) => {
        const newAnimal = await animalService.create(data);

        setAnimals(state => [...state, newAnimal]);

        navigate('/animals');
    };

    const onAnimalEditSubmit = async (values) => {
        const result = await animalService.edit(values._id, values);

        setAnimals(state => state.map(x => x._id === values._id ? result : x));

        navigate(`animals/${values._id}`)
    }

    const deleteAnimal = (animalId) => {
        setAnimals(state => state.filter(animal => animal._id !== animalId));
    };

    const contextValues = {
        animals,
        onAnimalAddSubmit,
        onAnimalEditSubmit,
        deleteAnimal,
    };

    return (
        <AnimalContext.Provider value={contextValues}>
            {children}
        </AnimalContext.Provider>
    );
};

export const useAnimalContext = () => {
    const context = useContext(AnimalContext);

    return context;
};