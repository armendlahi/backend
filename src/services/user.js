import axios from 'axios';
import { API_URL } from '../config'

export function fetchUsers({ success, fail }) {
    axios.get(`${API_URL}/users`)
        .then(result => success(result))
        .catch(err => fail(err));
}

export function deleteUser({ id, success, fail }) {
    axios
        .delete(`${API_URL}/users/${id}`)
        .then(result => success())
        .catch(err => fail());
}

export function editUser({ id, form, success, fail }) {
    axios
        .patch(`${API_URL}/users/${id}`, form)
        .then(result => success(result))
        .catch(error => fail(error));
}

export function createUser({ form, success, fail }) {
    axios
        .post(`${API_URL}/users`, form)
        .then(result => success(result))
        .catch(error => fail(error));
}