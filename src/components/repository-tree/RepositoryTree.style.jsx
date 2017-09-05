import styled from 'styled-components'

export const RepositoryTreeLayout = styled.div`margin: 0 14px 20px;`

export const SectionTitle = styled.h1`
  margin: 0 0 5px 0;
  padding: 0 6px;
  font-size: 13px;
  color: rgba(185, 185, 185, 1);
  font-weight: bold;
`

export const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: default;
`

export const Repository = styled.li`
  margin: 2px 0;
  padding: 3px 6px;
  font-weight: bold;
  border-radius: 3px;
  color: inherit;
  background-color: ${props =>
    props.isActive ? 'rgba(228, 230, 232, 1.00)' : 'transparent'};
`
