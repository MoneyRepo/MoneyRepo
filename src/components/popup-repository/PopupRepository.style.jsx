import styled from 'styled-components'

export const RepoSelector = styled.ul`
  background-color: rgba(44, 50, 58, 1);
  border-radius: 5px;
  padding: 5px;
  color: rgba(255, 255, 255, 1);
  list-style: none;
  margin: 0;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.1);
  width: 279px;
  position: relative;
  cursor: default;
`

export const OptionDescription = styled.dd`
  margin: 0 0 0 30px;
  color: rgba(132, 137, 144, 1);
`

export const OptionLayout = styled.dl`
  border-radius: 5px;
  padding: 6px;
  margin: 0;
  position: relative;
  color: rgba(255, 255, 255, 1);
  width: 269px;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(106, 157, 238, 1);

    & > ${OptionDescription} {
      color: rgba(218, 230, 251, 1);
    }
  }

  i {
    position: absolute;
    top: 2px;
    left: 5px;
  }
`

export const OptionTitle = styled.dt`
  margin: 0 0 0 30px;
  padding: 0 0 3px 0;
`
