import React from 'react';
import styles from './Home.module.css';
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
    return (
        <div>
            <header>
                <h1>Animal Sighthings Bulgaria</h1>
                <h2>Your Ultimate Guide to Animal Sightings in Bulgaria!</h2>
            </header>
            <main>
                <section className={styles['carousel-section']}>
                    <Carousel fade className={styles['carousel']}>
                        <Carousel.Item className={styles['first-image']}>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1635247230167-5230a9be00f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
                                alt="First slide"
                            />
                            <Carousel.Caption className={styles['text']}>
                                <h3>Discover and learn</h3>
                                <p>Browse through our extensive database of Bulgarian wildlife, featuring fascinating facts, stunning photographs, and helpful tips to enhance your wildlife watching experience. Whether you're a seasoned naturalist or a curious beginner, our listings cater to all levels of expertise.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={styles['second-image']}>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1627141124845-eaad4d550a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                                alt="Second slide"
                            />

                            <Carousel.Caption className={styles['text']}>
                                <h3>Contribute</h3>
                                <p>Contribute to the community and help build a better understanding of Bulgaria's diverse ecosystems by sharing your own animal sightings. Upload photographs, note the location, and provide a brief description of your encounter to inspire fellow wildlife enthusiasts.</p>
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
                                <p>Keep a record of all your personal animal sightings, creating a personalized wildlife journal. Our user-friendly platform allows you to log each encounter, complete with location, date, time, species, and any additional notes or observations. You can also upload your own photos to visually document your encounters and relive your favorite wildlife experiences. With our personalized tracking feature, your wildlife exploration journey will be even more rewarding and engaging.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>
                <div class="container">
                    <p>Discover the enchanting world of Bulgaria's diverse wildlife with Wild Bulgaria, your one-stop destination to explore the unique animals found across the country. Experience the thrill of tracking elusive species in their natural habitats, and contribute to conservation efforts by sharing your own sightings. From the majestic brown bears of the Rhodopes to the playful dolphins of the Black Sea, embark on an unforgettable adventure that will leave you in awe of Bulgaria's remarkable fauna.</p>
                </div>
            </main>
        </div>

    );
};