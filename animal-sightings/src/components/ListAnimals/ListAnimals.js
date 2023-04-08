import { AnimalItem } from './AnimalItem/AnimalItem';

import styles from './ListAnimals.module.css';

export const ListAnimals = ({
    animals,
}) => {
    return (
        <div className={styles['catalogue-page']}>
            <h1 className={styles['animals-title']}>Animals in Bulgaria</h1>
        <section className={styles['animal-catalogue']}>
            {animals.map((animal) => <AnimalItem key={animal._id} {...animal}/>)}
            {animals.length === 0 && (
                <h3 className={styles['no-animals']}>No animals added yet</h3>
            )}     
        </section>
        </div>
    );
};