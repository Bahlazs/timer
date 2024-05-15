import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 0px;
  height: 64px;
  background-color: #6c38cc;
  color: #ffffff;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`

export const Button = ({ onClick, label, logo }) => {
  return (
    <StyledButton onClick={onClick}>
      {logo}
      {label}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired,
}
