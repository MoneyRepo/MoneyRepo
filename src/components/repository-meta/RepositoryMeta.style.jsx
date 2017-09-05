import Button from '../button/Button'
import PopupMeta from '../popup-meta/PopupMeta'
import styled from 'styled-components'

export const RepositoryLayout = styled.section`
  padding: 0 10px;
  margin: 0 0 30px 0;
`

export const Title = styled.h1`
  font-size: 21px;
  font-weight: bold;
  margin: 0 0 15px 0;
  display: inline-block;
  line-height: 21px;
`

export const Description = styled.div``

export const StyledButton = styled(Button)`
  position: relative;
  top: -2px;
  margin-left: 5px;
  color: rgba(90, 97, 104, 1);
`

export const ButtonWrapper = styled.div`
  display: inline-block;
  position: relative;
`

export const StyledPopupMeta = styled(PopupMeta)`
  position: absolute;
  z-index: 999;
  top: 35px;
`
