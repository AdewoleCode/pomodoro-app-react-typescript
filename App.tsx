import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import TimerCountDownDisplay from './components/TimerCountDownDisplay';
import TimerToggleButton from './components/TimerToggleButton';

export default function App() {
  const focus_time_minutes = 8 * 60 * 1000
  const break_time_minutes = 2 * 60 * 500

  const [isTimerRunning, setIsTimerRunning] = useState<Boolean>(false)

  const [timerCount, setTimerCount] = useState<number>(focus_time_minutes)
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)
  const [timerMode, setTimerMode] = useState<"Break" | "Focus">("Focus")

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode == ('Break')) {
        setTimerMode('Focus')
        setTimerCount(break_time_minutes)
      } else {
        setTimerMode('Focus')
        setTimerCount(focus_time_minutes)
      }
      stopTimer()
    }
  }, [timerCount])

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
    <View style={{
      ...styles.container,
      ...{ backgroundColor: timerMode === "Break" ? '#2a9d8f' : '#d95550' },
    }}>
      <Text>{timerMode} Time!</Text>
      <StatusBar style="auto" />
      <TimerToggleButton isTimerRunning={isTimerRunning} startTimer={StartTimer} stopTimer={stopTimer} />
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
