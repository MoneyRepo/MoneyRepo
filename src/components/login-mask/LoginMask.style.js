import styled from 'styled-components'

// The container of login mask should have a background blur
// currently it is using a white background color with a high alpha value
export const LoginMaskLayout = styled.div`
  min-width: 1000px;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 99999;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);

  // FIXME: Dirty fix of lock icon position
  //   the icon will be change to Github icon and the button component
  //   may change as well in the future version
  i {
    position: relative;
    width: 19px;
    margin-right: 10px;
    top: 2px;
  }
`

export const LoginBox = styled.div`
  text-align: center;
  min-width: 180px;
  max-width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const LogoImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
`
