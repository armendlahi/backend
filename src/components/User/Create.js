import React from 'react';
import axios from 'axios';
import { API_URL } from '../../config'
import { Form } from './';

function Create({ setView }) {
    const handleSubmit = (event, form) => {
        event.preventDefault();
        axios
            .post(`${API_URL}/users`, form)
            .then(result => {
                setView('list');
            })
            .catch(e => {
                if (e.response.status !== 422) {
                    alert('An error has occured.')
                    return;
                }

                let errorMessage = 'The following errors occured: \n';

                const { errors } = e.response.data;

                for (let property in errors) {
                    if (errors.hasOwnProperty(property)) {
                        errorMessage += errors[property] + '\n';
                    }
                }

                alert(errorMessage);
            });
    };

    return <Form setView={setView} handleSubmit={handleSubmit} />
};

export default Create;