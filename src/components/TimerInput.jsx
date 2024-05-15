import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const Input = styled.input`
  width: 46px;
  height: 40px;
  margin: 0 8px 0 8px;
  text-align: center;
  font: inherit;
  color: #7c7c8a;
  background: none;
  border: none;
  border-bottom: 3px solid #7c7c8a;
`

export const TimerInput = ({ onChange, value }) => {
  return (
    <InputContainer>
      Set meditation for
      <Input value={value} onChange={onChange} placeholder="0" maxLength={3} /> minutes
    </InputContainer>
  )
}

TimerInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}
