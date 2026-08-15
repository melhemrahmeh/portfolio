import styled from 'styled-components';

/** Full-bleed tinted band so this section reads differently from the cards. */
export const Band = styled.div`
  position: relative;
  width: 100%;
  margin: 36px 0 8px;
  padding: 40px 36px;
  border-radius: ${(props) => props.theme.radii.lg};
  background: ${(props) => props.theme.bands.glow}, rgba(255, 255, 255, 0.02);
  border: 1px solid ${(props) => props.theme.colors.border};

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 24px;
    padding: 24px 18px;
    border-radius: ${(props) => props.theme.radii.md};
  }
`;

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px 32px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 4px 16px;
  }
`;

/* Borderless — separated by hairlines rather than boxes. */
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  /* drop the rule on the final row of each breakpoint's grid */
  &:nth-last-child(-n + 4) {
    border-bottom: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    &:nth-last-child(-n + 4) {
      border-bottom: 1px solid ${(props) => props.theme.colors.border};
    }
    &:nth-last-child(-n + 2) {
      border-bottom: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 14px 0;
  }
`;

export const BoxNum = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: -0.02em;
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 25px;
  }
`;

export const BoxText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;

/** Non-numeric credentials, kept out of the metric grid. */
export const NoteRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 8px;
    margin-top: 18px;
    padding-top: 16px;
  }
`;

export const Note = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.textMuted};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.pill};
  padding: 9px 16px;

  svg {
    color: ${(props) => props.theme.colors.cyan};
    flex-shrink: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    padding: 7px 12px;
  }
`;
