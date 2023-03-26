export const Header = () => {
    return (
        <section className="header-section">
            <nav role="navigation" className="navbar">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#"><span className="green">Animal Sightings</span> Bulgaria</a>
                </div>
                <ul className="navbar-nav nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Animals in Bulgaria</a></li>
                    <li><a href="#">Animal Sightings</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">My Animal Records</a></li>
                    <li><a href="#">My Animal Sightings</a></li>
                </ul>
            </nav>
        </section>
    );
};