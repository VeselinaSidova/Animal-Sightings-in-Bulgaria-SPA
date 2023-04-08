import { requestFactory } from './requester'

const baseUrl = 'http://localhost:3030/data/animals';

export const animalServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        try {
          const result = await request.get(baseUrl);
          const animals = Object.values(result);
          return animals;
        } catch (error) {
          if (error.message.includes('HTTP 404')) {
            console.error('Animals not found');
          } else {
            console.error(error);
          }
          return [];
        }
      };
    
    const getOne = async (animalId) => {
        try {
          const result = await request.get(`${baseUrl}/${animalId}`);
          return result;
        } catch (error) {
          if (error.message.includes('HTTP 404')) {
            console.error('Animal not found');
          } else {
            console.error(error);
          }
          return null; 
        }
      };
    
    const create = async (animalData) => {
        const result = await request.post(baseUrl, animalData);
        
        return result;
    };

    const edit = (animalId, data) => request.put(`${baseUrl}/${animalId}`, data);

    const deleteAnimal = (animalId) => request.delete(`${baseUrl}/${animalId}`);

    
    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteAnimal,
    };
};
