
import axios from 'axios';
import { API_URL } from '../../constants';

export const loadBooks = () => {
    return dispatch => {
        axios.get(`${API_URL}Books`)
            .then(response =>{
                const books = response.data;
                dispatch({
                    type: 'LOAD_BOOKS',
                    payload: books
                })
            })
            .catch(err => {
                console.log('My error', err);
            })
    }
};