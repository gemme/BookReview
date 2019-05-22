import axios from 'axios';

import { API_URL } from '../../constants';


export const loadBooks = () => {
    return dispatch => {
        axios
            .get(`${API_URL}Books`)
            .then(({data}) => {
                dispatch({
                    type: 'LOAD_BOOKS',
                    data
                })
            })
            .catch(err => console.error('My error', err))
    }
}