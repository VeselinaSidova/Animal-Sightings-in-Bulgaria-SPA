import { requestFactory } from './requester'

const baseUrl = 'http://localhost:3030/data/animals';

export const animalServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const animals = Object.values(result);
    
        return animals;
    };
    
    const getOne = async (animalId) => {
        const result = await request.get(`${baseUrl}/${animalId}`);
    
        return result;
    };
    
    const create = async (animalData) => {
        const result = await request.post(baseUrl, animalData);
    
        return result;
    };

    return {
        getAll,
        getOne,
        create, 
    };
};



