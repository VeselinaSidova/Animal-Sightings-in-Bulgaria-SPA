import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import styles from './AnimalDetails.module.css';

import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { animalServiceFactory } from '../../services/animalService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

export const AnimalDetails = () => {
    const { userId } = useContext(AuthContext);
    const { animalId } = useParams();
    const [animal, setAnimal] = useState({});
    const animalService = useService(animalServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        animalService.getOne(animalId)
            .then(result => {
                setAnimal(result);
            })
    }, [animalId]);

    const onDeleteClick = async () => {
        await animalService.delete(animal._id);
        navigate(-1);
    };

    const onCloseClick = () => {
        navigate(-1);
    };

    return (
        <section className={styles['animal-section']}>
            <Card key={animal._id} className={styles['animal-card']}>
                <CloseButton variant="white" className={styles['close-button']} onClick={onCloseClick}/>
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
                        <ListGroup.Item>Description: <p className={styles['animal-description']}>{animal.description}</p></ListGroup.Item>
                    </ListGroup>
                    <div className={styles['buttons-section']}>
                        <Link to={`/animals/my-sightings`} className={styles['sightings-button']}>Add to My Sightings</Link>
                        <Link to={`/animals/sightings`} className={styles['sightings-button']}>View on Map</Link>
                        {animal._ownerId === userId &&
                            <div className={styles['owner-buttons-section']}>
                                <Link to={`/animals/${animal._id}/edit`} className={styles['sightings-button']}>Edit</Link>
                                <button className={styles['delete-button']} onClick={onDeleteClick}>Delete</button>
                            </div>
                        }
                    </div>
                </Card.Body>
            </Card>
        </section>
    );
};