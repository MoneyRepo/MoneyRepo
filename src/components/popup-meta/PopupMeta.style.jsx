import styled from 'styled-components'

// REFACTOR: Style below is shared between all popup menu and
//   transaction type selector
export const MetaSelector = styled.ul`
  background-color: rgba(44, 50, 58, 1);
  border-radius: 5px;
  padding: 5px;
  color: rgba(255, 255, 255, 1);
  list-style: none;
  margin: 0;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
  width: 180px;
  cursor: inherit;
`

export const OptionDescription = styled.dd`
  margin: 0 0 0 30px;
  color: rgba(132, 137, 144, 1);
  cursor: inherit;
`

export const OptionLayout = styled.dl`
  border-radius: 5px;
  padding: 7px 6px 3px 6px;
  margin: 0;
  position: relative;
  color: rgba(255, 255, 255, 1);
  width: 170px;
  box-sizing: border-box;
  cursor: inherit;

  &:hover {
    background-color: rgba(106, 157, 238, 1);

    & > ${OptionDescription} {
      color: rgba(218, 230, 251, 1);
    }

    i {
      color: rgba(255, 255, 255, 1);
    }
  }

  i {
    position: absolute;
    top: 3px;
    left: 5px;
    color: #6a9cee;
    font-size: 21px;
    cursor: inherit;
  }
`

export const OptionTitle = styled.dt`
  margin: 0 0 0 25px;
  padding: 0 0 3px 0;
`
