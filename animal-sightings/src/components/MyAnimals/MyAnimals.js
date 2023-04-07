import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AnimalItem } from '../ListAnimals/AnimalItem/AnimalItem';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './MyAnimals.module.css';

export const MyAnimals = ({
    animals,
}) => {
    const { userId } = useContext(AuthContext);
    return (
        <div className={styles['myAnimals-catalogue-page']}>
            <h1 className={styles['myAnimals-title']}>My added animals</h1>
            <section className={styles['myAnimals-catalogue']}>
                {animals
                    .filter((animal) => animal._ownerId === userId)
                    .map((animal) => <AnimalItem key={animal._id} {...animal} />)}
            </section>
            <section className={styles['no-animals-added']}>
                {animals.filter((animal) => animal._ownerId === userId).length === 0 && (
                    <div>
                        <h3>You haven't added any animals yet.</h3>
                        <div className={styles['add-animal-link']}>
                            <Link to="/add-animal" className={styles['add-animal']}>Add Animal</Link>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};