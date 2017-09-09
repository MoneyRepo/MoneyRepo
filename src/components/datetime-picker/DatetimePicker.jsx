import { DateTimePicker } from '@blueprintjs/datetime'
import { injectGlobal } from 'styled-components'

/*eslint-disable no-unused-expressions */
injectGlobal`
.pt-dark .pt-datetimepicker {
  background-color: RGBA(44, 50, 58, 1.00);
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.10);
}
.pt-dark .pt-datepicker {
  background-color: RGBA(44, 50, 58, 1.00);
}

.DayPicker-Day {
  outline: none !important;
}

.pt-dark .pt-datepicker .DayPicker-Day.DayPicker-Day--selected:hover,
.pt-dark .pt-datepicker .DayPicker-Day.DayPicker-Day--selected {
  background-color: #6a9dee;
}

.pt-dark .pt-datetimepicker .pt-datepicker {
  border-bottom: none;
  padding: 0;
}
`

export default DateTimePicker
