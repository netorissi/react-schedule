import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'error' | 'warning' | 'info';
}

const ToastProperties = {
  info: css`
    background: #1781d5;
  `,
  warning: css`
    background: #ed9d43;
  `,
  success: css`
    background: #2fa128;
  `,
  error: css`
    background: #ed4343;
  `,
};

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

export const Toast = styled(animated.div)<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  color: #fff;

  & + div {
    margin-top: 16px;
  }

  ${({ type }) => ToastProperties[type || 'info']};

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
    align-items: center;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    background: transparent;
    right: 8px;
    top: 8px;
    opacity: 0.6;
    border: 0;
    color: inherit;
  }
`;
