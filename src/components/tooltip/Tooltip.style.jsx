import styled, { keyframes } from 'styled-components'

const opacityTransition = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const TooltipLayout = styled.div`
  background-color: rgba(242, 243, 245, 1);
  border-radius: 6px;
  border: 1px solid rgba(210, 210, 210, 1);
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding: 6px 9px;
  position: fixed;
  cursor: default;
  z-index: 100;
  max-width: 180px;

  opacity: 0;
  animation: ${opacityTransition} 0.15s linear;
  animation-fill-mode: forwards;
  animation-delay: ${props => `${props.delay}s`};

  top: ${props => `${props.position.top}px`};
  left: ${props => `${props.position.left}px`};
`

export const Title = styled.p`
  margin: 0 0 6px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
`

export const Text = styled.p`
  font-size: 9px;
  margin: 0;
  text-align: left;
`

export const SpanTitle = styled.span`text-align: left;`

export const SpanShortcut = styled.span`text-align: right;`

export const Separator = styled.span`padding: 0 20px;`
