import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../ui/colors';
import H1 from '../ui/h1';

const Profile = () => {
    return (
        <View style={styles.mainContainer}>
            <H1>Header</H1>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
    },
    col6: {
        flex: 1,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    tierImage: {
        width: 230,
        height: 230,
    }
})

export default Profile;