import { requestFactory } from './requester'

const baseUrl = 'http://localhost:3030/data/sightings';

export const sighringsServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async (userId) => {
        const query = encodeURIComponent(`_ownerId="${userId}"`);

        const result = await request.get(`${baseUrl}?where=${query}`);
        const sightings = Object.values(result);

        return sightings;
    };

    const add = async (sightingData) => {
        const result = await request.post(baseUrl, sightingData);
        return result;
    };
    
    return {
        getAll,
        add,
    };
}