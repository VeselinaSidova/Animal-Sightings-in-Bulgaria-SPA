import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as animalService from './services/animalService';

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from './components/Login/Login';
import { AddAnimal } from './components/AddAnimal/AddAnimal';
import { ListAnimals } from './components/ListAnimals/ListAnimals';

function App() {
    const nagivate = useNavigate();
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        animalService.getAll()
            .then(result => {
                setAnimals(result)
            })
    }, []);

    const onAnimalAddSubmit = async (data) => {
            const newAnimal = await animalService.create(data); 

            setAnimals(state => [...state, newAnimal]);

            nagivate('/animals');
    };

    return (
        <div className="App">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/animals' element={<ListAnimals animals={animals}/>} />
                    <Route path='/add-animal' element={<AddAnimal onAnimalAddSubmit={onAnimalAddSubmit}/>} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
