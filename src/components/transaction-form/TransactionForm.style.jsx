import styled from 'styled-components'
import TransactionInput from '../transaction-input/TransactionInput'

export const TransactionFormLayout = styled.div`
  margin: 30px -10px;
  padding: 10px 20px;
  border-radius: 3px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.09);
  border: solid 0.5px rgba(150, 149, 149, 0.25);
  transition: all 0.2s;
`

export const DateTimeWrap = styled.div`padding: 0 30px 0 40px;`

export const Row = styled.div`display: flex;`

export const TextInput = styled(TransactionInput)``
