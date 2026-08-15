import styled from 'styled-components';

export const Track = styled.ol`
  position: relative;
  width: 100%;
  margin: 36px 0 8px;
  padding-left: 68px;

  /* the spine */
  &::before {
    content: '';
    position: absolute;
    left: 27px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.cyan},
      ${(props) => props.theme.colors.purple} 45%,
      transparent
    );
    opacity: 0.45;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 46px;
    margin-top: 24px;

    &::before {
      left: 19px;
    }
  }
`;

export const Entry = styled.li`
  position: relative;
  padding-bottom: ${(props) => (props.$compact ? '22px' : '38px')};

  &:last-child {
    padding-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-bottom: ${(props) => (props.$compact ? '18px' : '26px')};
  }
`;

/** Circular node sitting on the spine, carrying the company initial. */
export const Node = styled.span`
  position: absolute;
  left: -68px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$compact ? '40px' : '56px')};
  height: ${(props) => (props.$compact ? '40px' : '56px')};
  margin-left: ${(props) => (props.$compact ? '8px' : '0')};
  border-radius: 50%;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => (props.$compact ? '15px' : '20px')};
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  background: ${(props) =>
    props.$current
      ? props.theme.gradients.primary
      : props.theme.colors.surface2};
  border: 1px solid
    ${(props) =>
      props.$current ? 'transparent' : props.theme.colors.borderStrong};
  box-shadow: 0 0 0 6px ${(props) => props.theme.colors.background1};
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.sm} {
    left: -46px;
    width: ${(props) => (props.$compact ? '28px' : '38px')};
    height: ${(props) => (props.$compact ? '28px' : '38px')};
    font-size: ${(props) => (props.$compact ? '12px' : '15px')};
    margin-left: ${(props) => (props.$compact ? '5px' : '0')};
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.background1};
  }
`;

export const Panel = styled.div`
  background: ${(props) =>
    props.$compact ? 'transparent' : props.theme.colors.surface1};
  border: 1px solid
    ${(props) => (props.$compact ? 'transparent' : props.theme.colors.border)};
  border-radius: ${(props) => props.theme.radii.lg};
  padding: ${(props) => (props.$compact ? '4px 0 0' : '26px 28px')};
  transition:
    border-color 0.3s ease,
    background 0.3s ease;

  &:hover {
    border-color: ${(props) =>
      props.$compact ? 'transparent' : props.theme.colors.borderStrong};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.$compact ? '2px 0 0' : '18px 16px')};
    border-radius: ${(props) => props.theme.radii.md};
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Role = styled.h3`
  font-size: ${(props) => (props.$compact ? '17px' : '23px')};
  font-weight: 700;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.$compact ? '15px' : '18px')};
  }
`;

export const Meta = styled.p`
  font-size: ${(props) => (props.$compact ? '13px' : '15px')};
  color: ${(props) => props.theme.colors.cyan};
  font-weight: 500;
  margin-top: 3px;

  span {
    color: ${(props) => props.theme.colors.textSubtle};
    font-weight: 400;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;

/** Right-hand stack: brand mark above the dates. */
export const MetaColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  flex-shrink: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: flex-start;
    gap: 8px;
  }
`;

/**
 * Light plate holding the company wordmark at its natural aspect ratio.
 * These logos are wide (2:1 – 2.6:1) and Murex's lettering is dark grey, so
 * they need a light ground and must never be forced into a square.
 */
export const LogoPlate = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: ${(props) => props.theme.radii.sm};
  padding: 8px 12px;
  height: 44px;
  box-shadow: 0 2px 10px -4px rgba(0, 0, 0, 0.6);

  img {
    height: 100%;
    width: auto;
    max-width: 118px;
    object-fit: contain;
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 34px;
    padding: 6px 9px;

    img {
      max-width: 92px;
    }
  }
`;

export const Dates = styled.span`
  flex-shrink: 0;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  color: ${(props) => props.theme.colors.textSubtle};
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
  }
`;

export const CurrentTag = styled.span`
  display: inline-block;
  margin-left: 10px;
  vertical-align: 3px;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.green};
  background: rgba(46, 230, 168, 0.1);
  border: 1px solid rgba(46, 230, 168, 0.3);
  border-radius: ${(props) => props.theme.radii.pill};
  padding: 3px 9px;
`;

export const Highlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 11px;
    margin-top: 14px;
  }
`;

export const Highlight = styled.li`
  position: relative;
  padding-left: 20px;
  font-size: 15px;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textMuted};

  &::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 10px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${(props) => props.theme.gradients.primary};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 1.65;
    padding-left: 15px;

    &::before {
      left: 0;
      top: 9px;
    }
  }
`;

export const HighlightLabel = styled.strong`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 6px;
    margin-top: 16px;
    padding-top: 14px;
  }
`;

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.colors.textMuted};
  background: none;
  border: 1px dashed ${(props) => props.theme.colors.borderStrong};
  border-radius: ${(props) => props.theme.radii.pill};
  padding: 10px 18px;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    color: #fff;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.cyan};
  }

  svg {
    transition: transform 0.25s ease;
    transform: rotate(${(props) => (props.$open ? '180deg' : '0deg')});
  }
`;

export const EarlierWrap = styled.div`
  margin-top: 26px;
`;
