import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config'

function List({ setView }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/users`)
            .then(result => setUsers(result.data))
            .catch(err => alert('Could not fetch data.'));
    }, []);

    const handleClick = () => {
        setView('create');
    };

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete this user?');

        if (!confirm) {
            return;
        }

        axios
            .delete(`${API_URL}/users/${id}`)
            .then(result => {
                axios.get(`${API_URL}/users`)
                    .then(result => setUsers(result.data))
                    .then(() => alert(result.data.success))
                    .catch(err => alert('Could not fetch data.'));
            })
            .catch(err => alert(err));
    };

    return (
        <div className="row">
            <div className="col-12">
                <button className="btn btn-outline-success mb-5" onClick={() => handleClick()}>Create New</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Country</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length ? users.map(user => (
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.dateOfBirth}</td>
                                <td>{user.country}</td>
                                <td>
                                    <button className="btn btn-outline-warning">Edit User</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger" onClick={() => handleDelete(user._id)}>Delete User</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="6">There are no registered users.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;