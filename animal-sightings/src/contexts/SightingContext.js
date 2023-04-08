import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { sightingsServiceFactory } from '../services/sightingsService';

export const SightingContext = createContext();

export const SightingProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [sigtings, setSigtings] = useState([]);
    const sightingsService = sightingsServiceFactory();

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

    const onSightingEditSubmit = async (values) => {
        const result = await sightingsService.edit(values._id, values);

        setSigtings(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/my-sightings`);
    }

    const deleteSighting = (sightingId) => {
        setSigtings(state => state.filter(sighting => sighting._id !== sightingId));
    };

    const contextValues = {
        sigtings,
        onSightingAddSubmit,
        onSightingEditSubmit,
        deleteSighting,
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