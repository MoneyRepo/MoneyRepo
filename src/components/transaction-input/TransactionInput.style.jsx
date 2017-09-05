import styled, { css } from 'styled-components'

export const TextInput = styled.input`
  border: none;
  flex: 1 1 0;
  font-size: 12px;
  font-family: 'Roboto Mono', monospace;
  margin: 0 0 10px 40px;
  &:active,
  &:focus {
    outline: none;
  }
  ${props => (props.warm === true ? placeholderColor : '')};
`

const placeholderColor = css`
  &::-webkit-input-placeholder {
    color: rgba(255, 0, 0, 1);
  }
`
