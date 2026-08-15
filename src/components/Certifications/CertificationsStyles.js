import styled from 'styled-components';

export const CertGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  margin: 40px 0 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 14px;
    margin: 24px 0 8px;
  }
`;

export const CertCard = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: ${(props) => props.theme.colors.surface1};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.md};
  padding: 22px 20px;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${(props) => props.theme.colors.borderStrong};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px;
    gap: 12px;
  }
`;

export const CertIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(19, 173, 199, 0.12);
  border: 1px solid rgba(19, 173, 199, 0.3);
  color: ${(props) => props.theme.colors.cyan};

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 36px;
    height: 36px;
  }
`;

export const CertBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const CertName = styled.h3`
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35;
  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`;

export const CertIssuer = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textSubtle};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;

export const EducationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(148, 93, 214, 0.14),
    rgba(19, 173, 199, 0.06)
  );
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  padding: 26px 28px;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 20px 18px;
    border-radius: ${(props) => props.theme.radii.md};
  }
`;

export const EducationText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    font-size: 15px;
    color: ${(props) => props.theme.colors.textMuted};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    h3 {
      font-size: 17px;
    }
    p {
      font-size: 13px;
    }
  }
`;
