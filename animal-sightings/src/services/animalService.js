import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/animals';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const animals = Object.values(result);

    return animals;
};

export const getOne = async (animalId) => {
    const result = await request.get(`${baseUrl}/${animalId}`);

    return result;
};

export const create = async (animalData) => {
    const result = await request.post(baseUrl, animalData);

    return result;
};

