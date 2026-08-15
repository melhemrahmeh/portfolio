import styled from 'styled-components';

export const TimelineGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  width: 100%;
  margin: 40px 0 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 12px;
    margin: 24px 0 8px;
  }
`;

export const TimelineItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 20px;
  background: ${(props) => props.theme.colors.surface1};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.md};
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.borderStrong};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px;
    gap: 8px;
  }
`;

export const Year = styled.h3`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 26px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.colors.text};

  /* trailing rule that fades out to the right */
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.borderStrong},
      transparent
    );
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const ItemText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
  }
`;
