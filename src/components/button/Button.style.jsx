import styled from 'styled-components'

export const ButtonLayout = styled.div`
  position: relative;
  display: inline-block;
`

export const ButtonElm = styled.button`
  border: 1px solid transparent;
  border-radius: 3px;
  height: 30px;
  display: flex;
  justify-content: center;
  color: rgba(90, 97, 104, 1);

  background-color: ${props =>
    props.isActive ? 'rgba(233, 233, 233, 1.0)' : 'transparent'};

  width: ${props => (props.width ? `${props.width}px` : 'auto')};

  line-height: 22px;

  i {
    font-size: 19px;
  }

  span {
    line-height: 21px;
    padding-right: 3px;
  }

  &:hover {
    border-color: ${props =>
      props.noBorder ? 'transparent' : 'rgba(233, 233, 233, 1.00)'};
  }

  &:focus {
    background-color: ${props =>
      props.isActive ? 'rgba(233, 233, 233, 1.0)' : 'transparent'};
  }

  &:active {
    background-color: rgba(233, 233, 233, 1);
  }

  &:focus,
  &:active {
    outline: none;
  }
`
