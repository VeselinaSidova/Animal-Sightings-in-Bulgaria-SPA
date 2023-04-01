import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import { AddAnimal } from './components/AddAnimal/AddAnimal';

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from './components/Login/Login';

function App() {
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
