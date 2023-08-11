import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"

type Props = {
    isTimerRunning: Boolean
    stopTimer: () => void
    startTimer: () => void
}

const TimerToggleButton: React.FC<Props> = ({ isTimerRunning, stopTimer, startTimer }) => {
    return (
        <Pressable onPress={isTimerRunning ? stopTimer : startTimer} >
            <View
                style={styles.buttonContainer}
            >
                <FontAwesome
                    name={isTimerRunning ? 'pause' : 'play'}
                    size={120}
                    color='red'
                    style={styles.icon}
                />
            </View>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    icon: {
        alignSelf: 'center',
        color: '#fff'
    },
    buttonContainer: {
        borderWidth: 4,
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        justifyContent: 'center',
        color: '#fff',
        marginVertical: 50
    }
})

export default TimerToggleButton