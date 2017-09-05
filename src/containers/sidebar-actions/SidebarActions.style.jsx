import styled from 'styled-components'
import Button from '../../components/button/Button'
import PopupRepository from '../../components/popup-repository/PopupRepository'

export const SidebarActionsLayout = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid RGBA(235, 235, 235, 1);
  height: 35px;
  padding: 5px 10px 0;
  background-color: RGBA(249, 250, 250, 1);
`

export const StyledActionButton = styled(Button)`top: -3px;`

export const StyledSettingButton = styled(Button)`
  top: -3px;
  float: right;
`

export const StyledPopupRepository = styled(PopupRepository)`top: -110px;`
