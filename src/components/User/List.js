import React, { useState, useEffect } from 'react';
import { fetchUsers, deleteUser } from '../../services/user';

function List({ setView, setCurrentUser }) {
    const [users, setUsers] = useState([]);
    const fetch = () => fetchUsers({
        success: result => {
            setUsers(result.data)
        },
        error: () => alert('Could not fetch data.')
    });

    useEffect(() => {
        fetch();
    }, []);

    const handleClick = () => {
        setView('create');
    };

    const handleEdit = (user) => {
        setCurrentUser(user);
        setView('edit');
    };

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete this user?');

        if (!confirm) {
            return;
        }

        deleteUser({
            id,
            success: () => fetch(),
            error: () => alert('Could not fetch data.')
        });
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
                                    <button className="btn btn-outline-warning" onClick={() => handleEdit(user)}>Edit User</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger" onClick={() => handleDelete(user._id)}>Delete User</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="6" className="text-center">There are no registered users.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;