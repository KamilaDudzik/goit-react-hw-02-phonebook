import PropTypes from "prop-types";
import { Component } from "react";
import css from "./ContactForm.module.css";

export class ContactForm extends Component {
    state = {
        name: "",
        number: ""
    }

    handlerChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleAdd = event => {
        event.prevventDefeault();
        const { name, number } = this.state;

        this.props.onSubmit(name, number);

        this.setState({ name: "", number: "" })
    }

    render() {
        const { name, number } = this.state;

        return (
            <div>
                <form>

                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            placeholder="Contact name"
                        />
                    </label>
                    <label>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            placeholder="Contact number"
                        />
                    </label>

                    <button type="submit">Add contact</button>

                </form>
            </div>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}