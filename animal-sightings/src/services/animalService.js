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

    const edit = (animalId, data) => request.put(`${baseUrl}/${animalId}`, data);

    const deleteAnimal = (animalId) => request.delete(`${baseUrl}/${animalId}`);

    // TODO delete from state
    
    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteAnimal,
    };
};
