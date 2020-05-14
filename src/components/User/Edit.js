import React from 'react';
import axios from 'axios';
import { API_URL } from '../../config'
import { Form } from './';

function Edit({ currentUser, setCurrentUser, setView }) {
    const { _id, username, email, dateOfBirth, country } = currentUser;

    const initialValues = {
        username,
        email,
        dateOfBirth,
        country
    };

    const handleSubmit = (event, form) => {
        event.preventDefault();
        axios
            .patch(`${API_URL}/users/${_id}`, form)
            .then(result => {
                setView('list');
            })
            .catch(e => {
                alert('An error has occured.')
            });
    };

    return <Form initialValues={initialValues} setView={setView} handleSubmit={handleSubmit} />
};

export default Edit;