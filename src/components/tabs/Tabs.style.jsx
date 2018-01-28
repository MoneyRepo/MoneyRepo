import styled from 'styled-components'

export const TabsLayout = styled.div`
  position: relative;
  margin: 10px 0;
`

export const TabsList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  padding-left: 0;
  margin: 0;
  list-style: none;
`

export const Tab = styled.li`
  padding: 5px 0;
  border-bottom: 2px solid transparent;
  margin: 0 10px;
  line-height: 13px;
  font-size: 11px;
  color: ${props =>
    props.selected ? 'rgba(82, 180, 246, 1.0)' : 'rgba(173, 173, 173, 1.0)'};
  border-color: ${props =>
    props.selected ? 'rgba(82, 180, 246, 1.0)' : 'transparent'};
  cursor: pointer;
`

export const TabsContent = styled.div`
  position: relative;
  margin: 20px 0;
`

export const TabPanel = styled.div`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  display: ${props => (props.selected ? 'block' : 'none')};
  opacity: ${props => (props.selected ? '1' : '0')};
  visibility: ${props => (props.selected ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`
