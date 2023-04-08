import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { sighringsServiceFactory } from '../services/sightingsService';

export const SightingContext = createContext();

export const SightingProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [sigtings, setSigtings] = useState([]);
    const sightingsService = sighringsServiceFactory();

    useEffect(() => {
        sightingsService.getAll()
            .then(result => {
                setSigtings(result);
            });
    }, []);

    const onSightingAddSubmit = async (values) => {
        const response = await sightingsService.add(values);

        setSigtings(state => [...state, response]);

        navigate('/my-sightings');
    };    

    const contextValues = {
        sigtings,
        onSightingAddSubmit,
    };

    return (
        <SightingContext.Provider value={contextValues}>
            {children}
        </SightingContext.Provider>
    );
};

export const useSightingContext = () => {
    const context = useContext(SightingContext);

    return context;
};