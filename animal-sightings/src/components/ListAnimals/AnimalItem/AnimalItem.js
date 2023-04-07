import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import styles from './AnimalItem.module.css';

export const AnimalItem = ({
    _id,
    animalName,
    latinName,
    imageUrl,
    animalClass,
    habitatBg,
    locationBg,
    foodPreference,
}) => {
    return (

        <Card key={_id} className={styles['animal-card']}>
        <Card.Img className={styles['card-image']} variant="top" src={imageUrl} />
        <Card.Body className={styles['card-body']}>
            <Card.Title className={styles['card-title']}>{animalName} <em>({latinName})</em></Card.Title>
            <Card.Text className={styles['animal-class']}>Class: {animalClass}</Card.Text>
            <Card.Text>Habitat: {habitatBg}</Card.Text>
            <Card.Text>Locations: {locationBg}</Card.Text>
            <Card.Text>Food preference: {foodPreference}</Card.Text>
            <div className={styles['button-section']}><Link to={`/animals/${_id}`} className={styles['details-button']}>Details</Link></div>
        </Card.Body>
    </Card>
    );
};