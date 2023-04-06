import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { animalServiceFactory } from './services/animalService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from './components/Login/Login';
import { AddAnimal } from './components/AddAnimal/AddAnimal';
import { ListAnimals } from './components/ListAnimals/ListAnimals';
import { AnimalDetails } from './components/AnimalDetails/AnimalDetails';

function App() {
    const navigate = useNavigate();
    const [animals, setAnimals] = useState([]);
    const [auth, setAuth] = useState({});
    const animalService = animalServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken);

    useEffect(() => {
        animalService.getAll()
            .then(result => {
                setAnimals(result)
            })
    }, []);

    const onAnimalAddSubmit = async (data) => {
        const newAnimal = await animalServiceFactory.create(data);

        setAnimals(state => [...state, newAnimal]);

        navigate('/animals');
    };

    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data);
            setAuth(result);

            navigate('/animals');

        } catch(error) {
            console.log('There is a problem'); //TODO - notification!
        }
    };

    const contextValues = {
        onLoginSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            <div className="App">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/animals' element={<ListAnimals animals={animals} />} />
                        <Route path='/animals/:animalId' element={<AnimalDetails />} />
                        <Route path='/add-animal' element={<AddAnimal onAnimalAddSubmit={onAnimalAddSubmit} />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
