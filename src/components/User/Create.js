import React from 'react';
import { Form } from './';
import { createUser } from '../../services/user';

function Create({ setView }) {
    const handleSubmit = (event, form) => {
        event.preventDefault();

        createUser({
            form,
            success: () => setView('list'),
            fail: error => {
                if (error.response.status !== 422) {
                    alert('An error has occured.')
                    return;
                }

                let errorMessage = 'The following errors occured: \n';

                const { errors } = error.response.data;

                for (let property in errors) {
                    if (errors.hasOwnProperty(property)) {
                        errorMessage += errors[property] + '\n';
                    }
                }

                alert(errorMessage);
            }
        })
    };

    return <Form setView={setView} handleSubmit={handleSubmit} />
};

export default Create;