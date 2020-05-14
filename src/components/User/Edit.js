import React, { useEffect } from 'react';
import { Form } from './';
import { editUser } from '../../services/user';

function Edit({ currentUser, setCurrentUser, setView }) {
    const { _id, username, email, dateOfBirth, country } = currentUser;

    useEffect(() => {
        return () => {
            setCurrentUser();
        }
    }, []);

    const initialValues = {
        username,
        email,
        dateOfBirth,
        country
    };

    const handleSubmit = (event, form) => {
        event.preventDefault();
        editUser({
            id: _id,
            form,
            success: () => setView('list'),
            fail: () => alert('An error has occured.')
        })
    };

    return (
        <Form
            initialValues={initialValues}
            setView={setView}
            handleSubmit={handleSubmit}
        />
    )
};

export default Edit;