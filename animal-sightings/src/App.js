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
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';

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

    
    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;

        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);
            
            setAuth(result);

            navigate('/animals');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };


    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
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
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
