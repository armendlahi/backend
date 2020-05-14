import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config'

function Create({ setView }) {
    const [form, setForm] = useState({
        username: '',
        email: '',
        dateOfBirth: '',
        country: ''
    });

    const handleClick = () => {
        setView('list');
    };

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
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

    return (
        <div className="row">
            <div className="col-6">
                <button className="btn btn-outline-success mb-5" onClick={handleClick}>View All</button>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            id="username"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            minLength={6}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Enter dateOfBirth"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={form.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter country"
                            id="country"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            required
                            minLength={2}
                        />
                    </div>
                    <div className="float-right">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;