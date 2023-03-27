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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles['second-image']}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1627141124845-eaad4d550a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption className={styles['text']}>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles['third-image']}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1669987337553-806ce98269c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption className={styles['text']}>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};