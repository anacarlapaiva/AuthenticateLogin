import axios from 'axios';
import { IUserAuthenticate } from '../hooks/auth';

export const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const createSession = async (dataLogin: IUserAuthenticate) => {
    return api.post('/sessions', { dataLogin })
}