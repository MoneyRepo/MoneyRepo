import styled, { css } from 'styled-components'
// import { TransactionType } from '../../constants/data-type.js'

export const IndicatorLayout = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: content-box;
`

const ColorExpense = css`
  background-color: rgba(255, 138, 128, 1);
  border: 2px solid rgba(255, 82, 82, 1);
`

const ColorIncome = css`
  background-color: rgba(185, 246, 202, 1);
  border: 2px solid rgba(105, 240, 174, 1);
`

const ColorTransfer = css`
  background-color: rgba(130, 177, 255, 1);
  border: 2px solid rgba(68, 138, 255, 1);
`

export const Indicator = styled.span`
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 15px;
  width: 15px;
  position: relative;
  top: 2px;
  margin-left: 5px;
  ${props => (props.type === 'Income' ? ColorIncome : '')};
  ${props => (props.type === 'Expense' ? ColorExpense : '')};
  ${props => (props.type === 'Transfer' ? ColorTransfer : '')};
`

export const TypeSelector = styled.ul`
  position: absolute;
  top: 20px;
  left: -8px;
  background-color: rgba(44, 50, 58, 1);
  border-radius: 5px;
  padding: 5px;
  color: rgba(255, 255, 255, 1);
  list-style: none;
  margin: 0;
  min-width: 100px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

export const Type = styled.li`
  padding: 3px;
  border-radius: 3px;
  cursor: default;
  &:hover {
    background-color: rgba(106, 157, 238, 1);
  }
`
