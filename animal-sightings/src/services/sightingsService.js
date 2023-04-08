import { requestFactory } from './requester'

const baseUrl = 'http://localhost:3030/data/sightings';

export const sightingsServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async (userId) => {
        const query = encodeURIComponent(`_ownerId="${userId}"`);

        const result = await request.get(`${baseUrl}?where=${query}`);
        const sightings = Object.values(result);

        return sightings;
    };

    const getOne = async (sightingId) => {
        const result = await request.get(`${baseUrl}/${sightingId}`);
    
        return result;
    };

    const add = async (sightingData) => {
        const result = await request.post(baseUrl, sightingData);
        return result;
    };

    const edit = (sightingId, data) => request.put(`${baseUrl}/${sightingId}`, data);

    const deleteSighting = (sightingId) => request.delete(`${baseUrl}/${sightingId}`);
    
    return {
        getAll,
        getOne,
        add,
        edit,
        delete: deleteSighting,
    };
}