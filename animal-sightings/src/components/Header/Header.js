import { Link } from 'react-router-dom';

import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <section className={styles['header-section']}>
            <nav className={styles['navigation']}>
                <div className={styles['navbar-header']}>
                    <Link className={styles['navbar-brand']} to={'/'}><span className={styles['black']}>Animal Sightings</span> Bulgaria</Link>
                </div>
                <ul className={styles['navbar-list']}>                    
                    <li><Link to={'/animals'} className={styles['navbar-link']} >Animals in Bulgaria</Link></li>
                    <li><Link to={'/sightings'} className={styles['navbar-link']} >Animal Sightings</Link></li>
                    <li><Link to={'/my-animals'} className={styles['navbar-link']} >My Animal Records</Link></li>
                    <li><Link to={'/my-sightings'} className={styles['navbar-link']} >My Animal Sightings</Link></li>
                    <li><Link to={'add-animal'} className={styles['navbar-link']} >Add Animal</Link></li>
                    <li><Link to={'/login'} className={styles['navbar-link']} >Login</Link></li>
                    <li><Link to={'/logout'} className={styles['navbar-link']} >Logout</Link></li>
                    <li><Link to={'/register'} className={styles['navbar-link']} >Register</Link></li>
                </ul>
            </nav>
        </section>
    );
};