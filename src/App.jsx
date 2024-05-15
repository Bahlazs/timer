import { useEffect } from 'react'
import { useState } from 'react'
import { TimerInput } from './components/TimerInput'
import { Timer } from './components/Timer'
import { TimerButtons } from './components/TimerButtons'
import { TitleIcon } from './Icons'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 1120px;
  height: 744px;
  background: #202024;
  border-radius: 8px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 60px;
`

const Title = styled.p`
  font-size: 20px;
  font-family: 'Fira Mono';
`

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

function App() {
  const [inputValue, setInputValue] = useState('')
  const [timeLeft, setTimeLeft] = useState(0)
  const [timerActive, setTimerActive] = useState(false)

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)

      return () => clearInterval(timer)
    } else if (timeLeft === 0) {
      setTimerActive(false)
    }
  }, [timerActive, timeLeft])

  const handleInputValue = (value) => {
    let numericValue = value.replace(/^(\d*\.\d*)\..*|[^0-9.]/g, '$1')
    if (timerActive) {
      setTimeLeft(0)
      setTimerActive(false)
    }
    setInputValue(numericValue)
  }

  const handleStart = () => {
    setTimeLeft(Math.round(Number(inputValue) * 60))
    setTimerActive(true)
  }

  const handlePause = () => {
    setTimerActive(false)
  }

  const handleRestart = () => {
    setTimerActive(true)
  }

  const handleStop = () => {
    setTimeLeft(Number(inputValue) * 60)
    setTimerActive(false)
  }

  return (
    <AppContainer>
      <TitleContainer>
        {TitleIcon}
        <Title>SimpleTimer</Title>
      </TitleContainer>
      <TimerContainer>
        <TimerInput value={inputValue} onChange={(e) => handleInputValue(e.target.value)} />
        <Timer timeLeft={timeLeft} />
        <TimerButtons
          onStart={handleStart}
          onPause={handlePause}
          onRestart={handleRestart}
          onStop={handleStop}
          timerActive={timerActive}
          timeLeft={timeLeft}
          inputValue={inputValue}
        />
      </TimerContainer>
    </AppContainer>
  )
}

export default App
