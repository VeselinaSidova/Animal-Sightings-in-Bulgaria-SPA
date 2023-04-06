import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import styles from './ListAnimals.module.css';


export const ListAnimals = ({
    animals,
}) => {
    return (
        <section className={styles['animal-catalogue']}>
            {animals.map((animal) => (
            <Card key={animal._id} className={styles['animal-card']}>
                <Card.Img className={styles['card-image']} variant="top" src={animal.imageUrl} />
                <Card.Body className={styles['card-body']}>
                    <Card.Title className={styles['card-title']}>{animal.animalName} <em>({animal.latinName})</em></Card.Title>
                    <Card.Text className={styles['animal-class']}>Class: {animal.animalClass}</Card.Text>
                    <Card.Text>Habitat: {animal.habitatBg}</Card.Text>
                    <Card.Text>Locations: {animal.locationBg}</Card.Text>
                    <Card.Text>Food preference: {animal.foodPreference}</Card.Text>
                    <div className={styles['button-section']}><Link to={`/animals/${animal._id}`} className={styles['details-button']}>Details</Link></div>
                </Card.Body>
            </Card>
            ))}
        </section>
    );
} 