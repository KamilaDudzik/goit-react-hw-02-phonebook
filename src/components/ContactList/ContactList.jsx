import PropTypes from "prop-types";
import { Component } from "react";

export class ContactList extends Component {
    render() {
        const { contacts } = this.props;

        return (
            <ul>
                {contacts.map(contact => {
                    return (
                        <li>
                            <p>{contact.name}</p>
                            <p>{contact.number}</p>
                            <button type="submit">Delete</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

ContactList.propTypes = {
    onClick: PropTypes.func.isRequired
}