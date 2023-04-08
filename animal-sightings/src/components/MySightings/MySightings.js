import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { sightingsServiceFactory } from '../../services/sightingsService';
import { SightedItem } from './SightingItem/SightingItem';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './MySightings.module.css';

export const MySightings = () => {
    const { userId } = useContext(AuthContext);
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const [mySightings, setMySightings] = useState([]);
    const sightingsService = sightingsServiceFactory();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        sightingsService.getAll(userId)
            .then(result => {
                setMySightings(result);
            });
    }, []);


    return (
        <div className={styles['mySightings-catalogue-page']}>
            <h1 className={styles['mySightings-title']}>My sighted animals</h1>
            <div className={styles['mySightings-div']}>
                <section className={styles['mySightings-catalogue']}>
                    {mySightings.map((sighting) => <SightedItem key={sighting._id} {...sighting} />)}
                </section>
            </div>
            <section className={styles['no-animals-added']}>
                {mySightings.length === 0 && (
                    <h3>You haven't sighted any animals yet.</h3>
                )}
            </section>
        </div>
    );
};