import styled from 'styled-components'

export const DashboardLayout = styled.section`
  flex: 1;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
`

export const DashboardContent = styled.div`
  height: calc(100% - 35px);
  box-sizing: border-box;
  padding: 30px 40px 10px 40px;
  overflow-y: auto;
`
