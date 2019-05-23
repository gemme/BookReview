import React from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet
} from 'react-native';

import { useEffect, useState } from 'react';

import ReviewRow from './ReviewRow';

import {connect} from 'react-redux';

import * as reviewActions from 'redux-store/actions/review';

const ReviewList = ({bookId, loadReviewsByBookId, reviews}) => {

    console.log('ReviewList', reviews);

    useEffect(() => loadReviewsByBookId(),[bookId]);

    return (
        <View style={styles.container}>
            <Text style={styles.reviewHeader}>{'RESEÑAS DE LA COMUNIDAD'}</Text>
            <View style={styles.row}>
                <FlatList
                    data={reviews}
                    renderItem={
                        ({item}) => (
                            <ReviewRow review={item}/>
                        )
                    }
                    keyExtractor={item => item.id}
                    />
            </View>
        </View>
    );
};

const mapStateTopProps = (state) => {
    const {review} = state;
    return {
        reviews: review.reviews
    };
};

const mapDispatchToProps = (dispatch,  ownProps) => {
    return {
        loadReviewsByBookId: () => dispatch(reviewActions.loadReviewsByBookId(ownProps.bookId))
    };
};

export default connect(mapStateTopProps, mapDispatchToProps)(ReviewList);
//export default ReviewList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flex:1,
        flexDirection: 'row'
    },
    reviewHeader:{
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 20,
        fontWeight: '400'
    }
});