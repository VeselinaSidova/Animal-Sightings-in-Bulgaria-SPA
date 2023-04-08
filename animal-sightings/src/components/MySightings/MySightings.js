import { useContext, useState, useEffect } from 'react';

import * as sightingsService from '../../services/sightingsService';
import { SightedItem } from './SightingItem/SightingItem';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './MySightings.module.css';

export const MySightings = () => {
    const { userId } = useContext(AuthContext);
    const [mySightings, setMySightings] = useState([]);

    useEffect(() => {
        sightingsService.getAll(userId)
            .then(result => {
                setMySightings(result);
            });
    }, []);


    return (
        <div className={styles['mySightings-catalogue-page']}>
            <h1 className={styles['mySightings-title']}>My sighted animals</h1>
            <section className={styles['mySightings-catalogue']}>
                {mySightings.map((sighting) => <SightedItem key={sighting._id} {...sighting} />)}
            </section>
            <section className={styles['no-animals-added']}>
                {mySightings.length === 0 && (
                    <h3>You haven't sighted any animals yet.</h3>
                )}
            </section>
        </div>
    );
};