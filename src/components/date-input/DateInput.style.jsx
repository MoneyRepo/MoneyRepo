import styled from 'styled-components'
import DatetimePicker from '../datetime-picker/DatetimePicker'

export const DateInputLayout = styled.div`
  position: relative;
  display: inline-block;
`

export const StyledDatetimePicker = styled(DatetimePicker) `
  z-index: 10;
  position: absolute;
  top: 20px;
  left: 0;
  border: 1px solid rgba(221, 221, 221, 1);
  opacity: ${props => (props.pickerVisibility ? '1' : '0')};
  visibility: ${props => (props.pickerVisibility ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`

export const DateTime = styled.span`
  color: rgba(130, 135, 141, 1);
  font-size: 12px;
`
