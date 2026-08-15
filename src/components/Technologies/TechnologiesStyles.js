import styled from 'styled-components';

export const StackList = styled.dl`
  width: 100%;
  margin: 36px 0 8px;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 24px;
  }
`;

export const StackRow = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 28px;
  align-items: start;
  padding: 22px 4px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: background 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.015);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 150px 1fr;
    gap: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 16px 2px;
  }
`;

export const GroupLabel = styled.dt`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.text};

  svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.colors.cyan};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
    color: ${(props) => props.theme.colors.cyan};
  }
`;

export const GroupBody = styled.dd`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  min-width: 0;
`;

export const CoreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

/** The primary tools in a group — visually weighted above the rest. */
export const CoreChip = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  padding: 8px 14px;
  border-radius: ${(props) => props.theme.radii.pill};
  color: ${(props) => props.theme.colors.text};
  background: rgba(19, 173, 199, 0.1);
  border: 1px solid rgba(19, 173, 199, 0.35);
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    padding: 7px 11px;
  }
`;

/** Everything else, as quiet running text rather than another wall of pills. */
export const AlsoLine = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textSubtle};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12.5px;
  }
`;
