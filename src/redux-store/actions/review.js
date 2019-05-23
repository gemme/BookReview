
import axios from 'axios';
import { API_URL } from '../../constants';

import { loadBooks } from './book';

export const loadReviewsByBookId = (bookId) => {
    return dispatch => {
        axios
            .get(`${API_URL}Books/${bookId}/reviews`)
            .then(response => {
                return dispatch({
                    type: 'LOAD_REVIEWS',
                    data: response.data
                })
            })
            .catch(err => console.error('ReviewList: ', err));

    }
};


export const submitReview = ({navigation, userName, rating, review, bookId}) => {
    return dispatch => {
        dispatch({
            type: 'SUBMITTING',
            data: true
        });
        const data = {
            bookId,
            userName,
            rating,
            description: review
        };
        console.log('url', `${API_URL}Reviews`);
        console.log('data', data);
        axios
            .post(`${API_URL}Reviews`, data)
            .then(response => {
                console.log('response', response);
                dispatch({
                    type: 'SUBMITTING',
                    data: false
                });
                dispatch({
                    type:'SUBMIT_REVIEW',
                    data: response.data
                });
                navigation.goBack();
                dispatch(loadBooks())
            })
            .catch(err => {
                console.error(err)
                dispatch({
                    type: 'SUBMITTING',
                    data: false
                });
            });
    };
}


