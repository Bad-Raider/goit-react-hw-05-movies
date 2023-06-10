import { useState } from "react";
import PropTypes from "prop-types";

const MoviesForm = ({onSubmit}) => {

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.trim() === "") {
            return alert("Please, enter a name for the movie!")
        };

        onSubmit(name.toLowerCase())
        setName('');
    };

    return <form
        onSubmit={handleSubmit}>
        <label >
            <input
                onChange={handleChange}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>
        <button
            type="submit">Search
        </button>
    </form>;
}

export default MoviesForm;



MoviesForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};