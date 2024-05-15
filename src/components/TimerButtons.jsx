import PropTypes from 'prop-types'

import { Button } from './Button'
import { PlayIcon, PauseIcon, RestartIcon, StopIcon } from '../Icons'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`

export const TimerButtons = ({ onStart, onPause, onRestart, onStop, timerActive, timeLeft, inputValue }) => {
  const renderButtons = () => {
    if ((parseInt(inputValue) === timeLeft / 60 && !timerActive) || isNaN(parseInt(inputValue)) || timeLeft === 0) {
      return (
        <>
          <Button onClick={onStart} label="Run Timer" logo={PlayIcon} />
        </>
      )
    }
    if (!timerActive && timeLeft / 60 !== parseInt(inputValue) && parseInt(inputValue) !== 0) {
      return (
        <>
          <Button onClick={onRestart} label="Restart Timer" logo={RestartIcon} />
          <Button onClick={onStop} label="Stop Timer" logo={StopIcon} />
        </>
      )
    }
    if (timerActive) {
      return (
        <>
          <Button onClick={onPause} label="Pause Timer" logo={PauseIcon} />
          <Button onClick={onStop} label="Stop Timer" logo={StopIcon} />
        </>
      )
    } else {
      return (
        <>
          <Button onClick={onStart} label="Run Timer" logo={PlayIcon} />
        </>
      )
    }
  }

  return <ButtonContainer>{renderButtons()}</ButtonContainer>
}

TimerButtons.propTypes = {
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  timerActive: PropTypes.bool.isRequired,
  timeLeft: PropTypes.number.isRequired,
  inputValue: PropTypes.string.isRequired,
}
