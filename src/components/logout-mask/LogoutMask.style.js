import styled from 'styled-components'

// The container of login mask should have a background blur
// currently it is using a white background color with a high alpha value
export const LogoutMaskLayout = styled.div`
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

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-bottom: 20px;
    border: 5px solid rgba(255, 255, 255, 0.95);
  }

  p {
    display: flex;
    cursor: default;
  }

  .key {
    text-align: right;
    flex: 0 0 40%;
    color: #8b8b8b;
    margin-right: 5px;
  }

  .value {
    text-align: left;
    flex: 0 0 60%;
  }

  .link {
    margin-top: 10px;
    justify-content: center;
    color: #92bcee;
    transition: all 0.2s;

    &:hover {
      color: #d4e2fc;
    }

    &:active {
      color: #4a90e2;
    }
  }
`

export const LogoutBox = styled.div`
  text-align: center;
  min-width: 350px;
  max-width: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
