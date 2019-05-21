import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Star = ({rating, size="small", color="#FFD64C"}) => {

    const TOTAL_STARS =[0,1,2,3,4];

    return (
        <View style={styles.stars}>
            {TOTAL_STARS.map(star => {
                const recolor = rating > star ? color : 'grey';
                return  <Icon size={resize(size)} name="star" color={recolor}/>;
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

const resize = size => {
    switch(size) {
        case 'small':   return 12;
        case 'medium':  return 20;
        case 'large':   return 30;
        default:        return 12;
    }
}

