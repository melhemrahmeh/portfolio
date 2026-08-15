import styled from 'styled-components';

/**
 * Horizontal journey rail. Pure CSS scroll-snap — no measuring, no scroll
 * maths, and the overflow is contained here so the page can never scroll
 * sideways.
 */
export const RailWrap = styled.div`
  position: relative;
  width: 100%;
  margin: 36px 0 8px;

  /* fade the right edge to hint that the rail continues */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 14px;
    width: 64px;
    pointer-events: none;
    background: linear-gradient(
      to right,
      transparent,
      ${(props) => props.theme.colors.background1}
    );
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 24px;

    &::after {
      width: 32px;
    }
  }
`;

export const Rail = styled.ol`
  display: flex;
  gap: 18px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 14px;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.borderStrong} transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.borderStrong};
    border-radius: 999px;
  }
`;

export const Stop = styled.li`
  flex: 0 0 262px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-basis: 210px;
    gap: 10px;
  }
`;

/** Year + the connector line and node that make the rail read as a timeline. */
export const StopHead = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;

  /* horizontal connector running through the node */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: -18px;
    bottom: 3px;
    height: 1px;
    background: ${(props) => props.theme.colors.border};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-bottom: 12px;
  }
`;

export const Node = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${(props) =>
    props.$last ? props.theme.colors.green : props.theme.colors.purple};
  box-shadow: 0 0 0 4px ${(props) => props.theme.colors.background1};
`;

export const Year = styled.h3`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 30px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${(props) =>
    props.$last ? props.theme.colors.text : props.theme.colors.textSubtle};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
  }
`;

export const StopText = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${(props) => props.theme.colors.textMuted};
  padding-right: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
  }
`;

export const RailHint = styled.p`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.textSubtle};
  margin-top: 10px;
`;
