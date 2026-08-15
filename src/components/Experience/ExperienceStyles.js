import styled from 'styled-components';

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  margin: 40px 0 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 20px;
    margin: 24px 0 8px;
  }
`;

export const Card = styled.article`
  position: relative;
  width: 100%;
  background: ${(props) => props.theme.colors.surface1};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  box-shadow: ${(props) => props.theme.shadows.card};
  padding: 32px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  /* accent rail down the left edge */
  &::before {
    content: '';
    position: absolute;
    inset: 0 auto 0 0;
    width: 3px;
    background: ${(props) => props.theme.gradients.primary};
    opacity: ${(props) => (props.$current ? 1 : 0.35)};
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.borderStrong};
    box-shadow: ${(props) => props.theme.shadows.cardHover};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px 18px;
    border-radius: ${(props) => props.theme.radii.md};
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 18px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 14px;
  }
`;

export const Logo = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: ${(props) => props.theme.radii.md};
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 44px;
    height: 44px;
    padding: 4px;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  flex: 1;
`;

export const Role = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

export const Company = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.cyan};
  font-weight: 500;

  span {
    color: ${(props) => props.theme.colors.textSubtle};
    font-weight: 400;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
  }
`;

export const DateBadge = styled.span`
  flex-shrink: 0;
  align-self: flex-start;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.colors.textMuted};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.pill};
  padding: 7px 14px;
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
    padding: 5px 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

/* On small screens the date moves under the title instead of the header row. */
export const DateInline = styled.p`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 11px;
    color: ${(props) => props.theme.colors.textSubtle};
  }
`;

export const Highlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 24px 0 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 12px;
    margin-top: 18px;
  }
`;

export const Highlight = styled.li`
  position: relative;
  padding-left: 22px;
  font-size: 16px;
  line-height: 1.65;
  color: ${(props) => props.theme.colors.textMuted};

  &::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${(props) => props.theme.gradients.primary};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 1.6;
    padding-left: 16px;

    &::before {
      left: 0;
      top: 8px;
      width: 5px;
      height: 5px;
    }
  }
`;

export const HighlightLabel = styled.strong`
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
  padding-top: 22px;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 6px;
    margin-top: 18px;
    padding-top: 16px;
  }
`;
