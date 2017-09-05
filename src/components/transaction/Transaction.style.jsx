import styled from 'styled-components'

export const TransactionLayout = styled.div`
  display: flex;
  margin: 5px 0;
  cursor: default;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: ${props =>
    props.active ? 'rgba(212, 226, 252, 1.00)' : 'transparent'};
`

export const DateTime = styled.span`
  padding: 0 30px 0 20px;
  color: rgba(130, 135, 141, 1);
  cursor: default;
`

export const Description = styled.span`
  display: block;
  color: rgba(20, 21, 23, 1);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;
`

export const FigureContainer = styled.p`
  display: inline-block;
  float: right;
  margin: 0;
`

export const Amount = styled.span`
  display: inline-block;
  font-weight: bold;
  min-width: 100px;
  text-align: right;
  cursor: default;
`

export const Balance = styled.span`
  display: inline-block;
  font-weight: bold;
  min-width: 100px;
  text-align: right;
  cursor: default;
`
