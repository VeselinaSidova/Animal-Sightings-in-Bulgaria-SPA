import React from 'react';
import styles from './Home.module.css';
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
    return (
        <section className={styles['carousel-section']}>
            <Carousel fade className={styles['carousel']}>
                <Carousel.Item className={styles['first-image']}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1635247230167-5230a9be00f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption className={styles['text']}>
                        <h3>Learn and contribute</h3>
                        <p>Read general information interesting facts about animals in Bulgaria and add animals species to the list.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles['second-image']}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1627141124845-eaad4d550a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption className={styles['text']}>
                        <h3>Check</h3>
                        <p>Check where you can sigth animals in Bulgaria.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles['third-image']}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1669987337553-806ce98269c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption className={styles['text']}>
                        <h3>Track</h3>
                        <p>Track the animals your animal sightings.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};