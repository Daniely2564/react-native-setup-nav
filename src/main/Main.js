import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import colors from '../ui/colors';
import ChatRoom from '../hoc/ChatRoom';

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                <Text style={{ color: colors.LIGHTBLACK, fontSize: 18, alignSelf: 'flex-start', marginLeft: 30, marginTop: 30, fontWeight: 'bold' }}>Popular Chat</Text>
                <View style={{ width: '100%', borderWidth: 1, borderColor: '#efefef' }}></View>
                <ChatRoom />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
