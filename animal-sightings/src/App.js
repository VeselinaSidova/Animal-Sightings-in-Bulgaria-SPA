import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as animalService from './services/animalService';

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from './components/Login/Login';
import { AddAnimal } from './components/AddAnimal/AddAnimal';

function App() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        animalService.getAll()
            .then(result => {
                setAnimals(result)
            })
    }, []);

    return (
        <div className="App">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/add-animal' element={<AddAnimal />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
