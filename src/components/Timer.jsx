import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTimer = styled.div`
  display: flex;
  align-items: center;
  font-size: 160px;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
`
const Dot = styled.div`
  color: #6c38cc;
  text-align: center;
  margin: 8px;
`
const Counter = styled.div`
  position: relative;
  padding: 0 24px 0 24px;
  margin: 8px;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #29292e;
    border-radius: 8px;
    z-index: -1;
  }
`

export const Timer = ({ timeLeft }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const minutesArray = minutes.toString().padStart(2, '0').split('')
    const secondsArray = seconds.toString().padStart(2, '0').split('')

    return (
      <>
        {minutesArray.map((char, index) => (
          <Counter key={`minute-${index}`}>{char}</Counter>
        ))}
        <Dot>:</Dot>
        {secondsArray.map((char, index) => (
          <Counter key={`second-${index}`}>{char}</Counter>
        ))}
      </>
    )
  }

  return <StyledTimer>{formatTime(timeLeft)}</StyledTimer>
}

Timer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
}
