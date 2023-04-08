import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { animalServiceFactory } from './services/animalService';
import * as sightingsService from './services/sightingsService';
import { AuthProvider } from './contexts/AuthContext';

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from './components/Login/Login';
import { AddAnimal } from './components/AddAnimal/AddAnimal';
import { ListAnimals } from './components/ListAnimals/ListAnimals';
import { AnimalDetails } from './components/AnimalDetails/AnimalDetails';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { MyAnimals } from './components/MyAnimals/MyAnimals';
import { EditAnimal } from './components/EditAnimal/EditAnimal';
import { AddSightedAnimal } from './components/AddSightedAnimal/AddSightedAnimal';
import { MySightings } from './components/MySightings/MySightings';

function App() {
    const navigate = useNavigate();
    const [animals, setAnimals] = useState([]);
    const animalService = animalServiceFactory(); // TODO auth.accessToken

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

    const onSightingAddSubmit = async (values) => {
        const response = await sightingsService.add(values);

        setAnimals(state => [...state, response]);

        navigate('/my-sightings');
    };

    return (
        <AuthProvider>
            <div className="App">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/animals' element={<ListAnimals animals={animals} />} />
                        <Route path='/animals/:animalId' element={<AnimalDetails />} />
                        <Route path='/animals/:animalId/edit' element={<EditAnimal onAnimalEditSubmit={onAnimalEditSubmit}/>} />
                        <Route path='/my-sightings'element={<MySightings />} />
                        <Route path='/my-animals' element={<MyAnimals animals={animals}/>} />
                        <Route path='/add-animal' element={<AddAnimal onAnimalAddSubmit={onAnimalAddSubmit} />} />
                        <Route path='/add-sighting/:animalId' element={<AddSightedAnimal onSightingAddSubmit={onSightingAddSubmit}/>} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>
                </main>
            </div>
        </AuthProvider>
    );
}

export default App;
