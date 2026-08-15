import styled from 'styled-components';

export const EducationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  background: linear-gradient(
    100deg,
    rgba(148, 93, 214, 0.16),
    rgba(19, 173, 199, 0.05) 60%,
    transparent
  );
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: 3px solid ${(props) => props.theme.colors.purple};
  border-radius: ${(props) => props.theme.radii.lg};
  padding: 24px 26px;
  margin: 36px 0 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 18px 16px;
    margin-top: 24px;
    border-radius: ${(props) => props.theme.radii.md};
  }
`;

export const EducationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(148, 93, 214, 0.16);
  border: 1px solid rgba(148, 93, 214, 0.35);
  color: ${(props) => props.theme.colors.purple};
`;

export const EducationText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-family: ${(props) => props.theme.fonts.title};
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

export const CertList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 40px;
  width: 100%;
  margin-top: 28px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    column-gap: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 18px;
  }
`;

export const CertRow = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

/** The whole row is the verification link. */
export const CertLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 4px;
  transition: 0.25s ease;

  &:hover {
    padding-left: 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 12px;
    padding: 13px 2px;
  }
`;

/** Verify affordance: hidden until the row is hovered or keyboard-focused. */
export const VerifyIcon = styled.span`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-left: 12px;
  color: ${(props) => props.theme.colors.cyan};
  opacity: 0;
  transform: translateX(-4px);
  transition: 0.25s ease;

  ${CertLink}:hover &,
  ${CertLink}:focus-visible & {
    opacity: 1;
    transform: translateX(0);
  }

  /* No hover on touch — keep it permanently visible there. */
  @media (hover: none) {
    opacity: 0.55;
    transform: none;
  }
`;

/** Brand-coloured mark — far more recognisable than a generic award icon. */
export const CertMark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: ${(props) => props.theme.radii.sm};
  color: ${(props) => props.$color};
  background: ${(props) => props.$color}1a;
  border: 1px solid ${(props) => props.$color}44;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 34px;
    height: 34px;
  }
`;

export const CertBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const CertName = styled.h3`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.35;
  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const CertIssuer = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textSubtle};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;
