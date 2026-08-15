import styled from 'styled-components';

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0 24px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 24px 0 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 20px 0 8px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${(props) => props.theme.colors.surface1};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.md};
  min-height: 150px;
  padding: 24px 22px;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.borderStrong};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    min-height: 130px;
    padding: 18px 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 110px;
    padding: 14px 12px;
  }
`;

export const BoxNum = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 34px;
  line-height: 1.1;
  letter-spacing: -0.01em;
  background: ${(props) => props.theme.gradients.primary};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 27px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 21px;
  }
`;

export const BoxText = styled.p`
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
  }
`;
