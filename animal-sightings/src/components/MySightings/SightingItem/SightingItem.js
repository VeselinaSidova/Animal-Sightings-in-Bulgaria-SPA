import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { animalServiceFactory } from '../../../services/animalService';
import { sightingsServiceFactory } from '../../../services/sightingsService';
import { useService } from '../../../hooks/useService';
import { useSightingContext } from '../../../contexts/SightingContext'

import Card from 'react-bootstrap/Card';
import styles from './SightedItem.module.css';

export const SightedItem = ({
    _id,
    animalId,
    location,
    date,
    note,
}) => {
    const [animal, setAnimal] = useState({});
    const animalService = useService(animalServiceFactory);
    const navigate = useNavigate();
    const sightingsService = sightingsServiceFactory();
    const { deleteSighting } = useSightingContext();

    useEffect(() => {
        animalService.getOne(animalId)
            .then(result => {
                setAnimal(result);
            })
    }, [animalId]);
    
    const onDeleteClick = async () => {
        await sightingsService.delete(_id);

        deleteSighting(_id);

        navigate('/animals');
    };

    return (
        <Card key={_id} className={styles['animal-card']}>
            <div className={styles['image-section']}><Card.Img className={styles['card-image']} variant="top" src={animal.imageUrl} /></div>
            <Card.Body className={styles['card-body']}>
                <Card.Title className={styles['card-title']}>Animal: {animal.animalName}</Card.Title>
                <Card.Text >Location: {location}</Card.Text>
                <Card.Text >Date: {date}</Card.Text>
                <Card.Text >Note: {note}</Card.Text>
                <div className={styles['button-section']}>
                    <Link to={`/animals/${animal._id}`} className={styles['details-button']}>Details</Link>
                    <Link to={`/my-sightings/${_id}/edit`} className={styles['edit-button']}>Edit</Link>
                    <button className={styles['delete-button']} onClick={onDeleteClick}>Delete</button>
                </div>
            </Card.Body>
        </Card>
    );
};