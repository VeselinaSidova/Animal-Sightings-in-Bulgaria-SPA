import styles from './Header.module.css';

export const Header = () => {
    return (
        <section className=".navigation-section">
            <nav className=".navigation">
                <ul className=".nav-list">
                    <li>Home</li>
                    <li>Animals in Bulgaria</li>
                    <li>Animal Sightings</li>
                    <li>My Sighted Animals</li>
                    <li>Login</li>
                </ul>
            </nav>
        </section>

    );
};