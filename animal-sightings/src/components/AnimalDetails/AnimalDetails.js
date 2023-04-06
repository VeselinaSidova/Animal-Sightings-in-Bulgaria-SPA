import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import styles from './AnimalDetails.module.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { animalServiceFactory } from '../../services/animalService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

export const AnimalDetails = () => {
    const { animalId } = useParams();
    const [animal, setAnimal] = useState({});
    const animalService = useService(animalServiceFactory);

    useEffect(() => {
        animalService.getOne(animalId)
            .then(result => {
                setAnimal(result);
            })
    }, [animalId]);

    return (
        <section className={styles['animal-section']}>
            <Card key={animal._id} className={styles['animal-card']}>
                <Link to={`/animals`} className={styles['close-button']}><CloseButton variant="white" /></Link>
                <Card.Img className={styles['card-image']} variant="top" src={animal.imageUrl} />
                <Card.Body className={styles['card-body']}>
                    <Card.Title className={styles['card-title']}>{animal.animalName} <em>({animal.latinName})</em></Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className={styles['animal-class']}>Class: {animal.animalClass}</ListGroup.Item>
                        <ListGroup.Item>Habitat: {animal.habitat}</ListGroup.Item>
                        <ListGroup.Item>Habitat in Bulgaria: {animal.habitatBg}</ListGroup.Item>
                        <ListGroup.Item>Locations in Bulgaria: {animal.locationBg}</ListGroup.Item>
                        <ListGroup.Item>Food preference: {animal.foodPreference}</ListGroup.Item>
                        <ListGroup.Item>Mass: {animal.mass}</ListGroup.Item>
                        <ListGroup.Item>Description: {animal.description}</ListGroup.Item>
                    </ListGroup>
                    <div className={styles['buttons-section']}>
                        <Link to={`/animals/my-sightings`} className={styles['sightings-button']}>Add to My Sightings</Link>
                        <Link to={`/animals/sightings`} className={styles['sightings-button']}>View on Map</Link>
                    </div>
                </Card.Body>
            </Card>
        </section>
    );
};