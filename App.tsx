import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import TimerCountDownDisplay from './components/TimerCountDownDisplay';

export default function App() {
  const Focus_time_minutes = 0.5 * 60 * 1000
  const break_time_minutes = 0.2 * 60 * 500

  const [isTimerRunning, setIsTimerRunning] = useState<Boolean>(false)

  const [timerCount, setTimerCount] = useState<number>(Focus_time_minutes)
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)

  const StartTimer = () => {
    console.log('timer is starting...');
    setIsTimerRunning(true)
    const timerId = setInterval(() => setTimerCount(prevState => prevState - 1000), 1000)
    setTimerInterval(timerId)
  }

  const stopTimer = () => {
    if (timerInterval !== null) {
      clearInterval(timerInterval)
    }
    setIsTimerRunning(false)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title={isTimerRunning ? "Stop Timer" : "Start Timer"}
        onPress={isTimerRunning ? stopTimer : StartTimer}
      />
      <Button
        title='Stop Timer'
        onPress={stopTimer}
      />

      <TimerCountDownDisplay timerDate={new Date(timerCount)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
