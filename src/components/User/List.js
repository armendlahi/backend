import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config'

function List() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // const interval = setInterval(() => {
            axios.get(`${API_URL}/users`)
                .then(result => setUsers(result.data));
        // }, 2000);

        // return () => {
        //     clearInterval(interval);
        // }
    }, []);

    return (
        <div className="container">
            <div className="col-md-12">
                <button className="btn btn-outline-success mb-5">Create New</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Country</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.dateOfBirth}</td>
                                <td>{user.country}</td>
                                <td>
                                    <button className="btn btn-outline-warning">Edit User</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;