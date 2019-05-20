import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Star = ({rating}) => {

    const TOTAL_STARS =[0,1,2,3,4];

    return (
        <View style={styles.stars}>
            {TOTAL_STARS.map(star => {
                const color = rating > star ? "#FFD64C" : 'grey';
                return  <Icon name="star" color={color}/>;
            })}
        </View>
    );
};

export default Star;

const styles = StyleSheet.create({
    'stars': {
        flexDirection: 'row',
        paddingVertical: 10
    }
});
