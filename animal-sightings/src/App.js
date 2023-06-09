import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { AnimalProvider } from './contexts/AnimalContext';
import { SightingProvider } from './contexts/SightingContext';

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from './components/Footer/Footer';
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
import { EditSightedAnimal } from './components/EditSighting/EditSightedAnimal';
import { Profile } from './components/Profile/Profile';
import { NotFound } from './components/NotFound/NotFound';

function App() {
    return (
        <AuthProvider>
            <AnimalProvider>
                <SightingProvider>
                    <div className="App">
                        <Header />
                        <main id="main-content">
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/animals' element={<ListAnimals />} />
                                <Route path='/animals/:animalId' element={<AnimalDetails />} />
                                <Route path='/animals/:animalId/edit' element={<EditAnimal />} />
                                <Route path='/my-sightings' element={<MySightings />} />
                                <Route path='/my-sightings/:sightingId/edit' element={<EditSightedAnimal />} />
                                <Route path='/my-animals' element={<MyAnimals />} />
                                <Route path='/add-animal' element={<AddAnimal />} />
                                <Route path='/add-sighting/:animalId' element={<AddSightedAnimal />} />
                                <Route path='/register' element={<Register />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/logout' element={<Logout />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </SightingProvider>
            </AnimalProvider>
        </AuthProvider>
    );
}

export default App;
