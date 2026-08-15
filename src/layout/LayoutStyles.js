import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

/* Keyboard-only shortcut past the navigation. */
export const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 100;
  background: ${(props) => props.theme.colors.surface2};
  color: #fff;
  padding: 12px 20px;
  border-radius: 0 0 ${(props) => props.theme.radii.sm} 0;

  &:focus {
    left: 0;
  }
`;
