export const AddAnimal = () => {
    return (
        <section id="add-animal" className="auth">
            <form className="add-animal">
                <div className="container">
                    <h1>Add Animal</h1>
                    <label htmlFor="animal-name">Name:</label>
                    <input type="text" id="animalName" name="animalName" placeholder="Brown Bear" />

                    <label htmlFor="latin-name">Latin name:</label>
                    <input type="text" id="latinName" name="latinName" placeholder="Ursus arctos" />

                    <div>
                        <label htmlFor="animal-class">Class:</label>
                        <select id="animalClass" name="animalClass">
                            <option value="mammals" selected>Mammals</option>
                            <option value="birds">Birds</option>
                            <option value="fish">Fish</option>
                            <option value="reptiles">Reptiles</option>
                            <option value="amphibians">Amphibians</option>
                            <option value="insects">Insects</option>
                            <option value="invertebrates">Invertebrates</option>
                        </select>
                    </div>

                    <label htmlFor="habitat">Habitat:</label>
                    <input type="text" id="habitat" name="habitat" placeholder="Forest, Tundra" />

                    <label htmlFor="habitat-bg">Habitat in Bulgaria:</label>
                    <input type="text" id="habitatBg" name="habitatBg" placeholder="Forest" />

                    <label htmlFor="location-bg">Locations in Bulgaria:</label>
                    <input type="text" id="locationBg" name="locationBg" placeholder="Rila, Pirin, Balkan" />

                    <div>
                        <label>Food preference:</label>
                        <label htmlFor="carnivores">Carnivores</label>
                        <input type="radio" name="carnivores" id="carnivores" value ="carnivores" />
                        <label htmlFor="herbivores">Herbivores</label>
                        <input type="radio" name="herbivores" id="herbivores" value ="herbivores" />
                        <label htmlFor="omnivores">Omnivores</label>
                        <input type="radio" name="omnivores" id="omnivores" value ="omnivores" />
                    </div>

                    <label htmlFor="mass">Mass:</label>
                    <input type="text" id="mass" name="mass" placeholder="400-600 kg" />

                    <label htmlFor="animal-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Paste image URL" />

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description"cols="40" rows="10" placeholder="The brown bear is..."></textarea>

                </div>
            </form>
        </section>
    );
};