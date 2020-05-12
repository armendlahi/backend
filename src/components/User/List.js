import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config'

function List() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/users`)
            .then(result => setUsers(result.data));
    }, []);

    return (
        <div>
            <table>
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
                            <td>Edit User</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;