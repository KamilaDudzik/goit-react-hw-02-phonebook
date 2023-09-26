import PropTypes from "prop-types";
import { Component } from "react";
import css from "./Filter.module.css";

export class Filter extends Component {

    filterContacts = event => {
        const { value } = event.target;
        this.props.onChange(value);
    }

    render() {
        return (
            <div>
                <h3>Find contacts by name</h3>
                <input
                    placeholder="Contact name"
                />
            </div>
        )
    }
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired
}