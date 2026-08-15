import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 auto;
  }
`;

export const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.textMuted};
  background: rgba(19, 173, 199, 0.08);
  border: 1px solid rgba(19, 173, 199, 0.25);
  border-radius: ${(props) => props.theme.radii.pill};
  padding: 8px 16px;
  margin-top: 48px;

  strong {
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    padding: 6px 12px;
    margin-top: 16px;
  }
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #2ee6a8;
  box-shadow: 0 0 0 0 rgba(46, 230, 168, 0.6);
  animation: pulse 2.4s infinite;

  @keyframes pulse {
    70% {
      box-shadow: 0 0 0 8px rgba(46, 230, 168, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(46, 230, 168, 0);
    }
  }
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin: 8px 0 64px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 10px;
    margin-bottom: 32px;
    width: 100%;
  }
`;

export const PrimaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  padding: 15px 28px;
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) => props.theme.gradients.primary};
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px -12px rgba(19, 173, 199, 0.8);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex: 1 1 100%;
    justify-content: center;
    font-size: 15px;
    padding: 13px 20px;
  }
`;

export const GhostCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textMuted};
  padding: 15px 24px;
  border-radius: ${(props) => props.theme.radii.pill};
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    border-color: ${(props) => props.theme.colors.borderStrong};
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex: 1;
    justify-content: center;
    font-size: 14px;
    padding: 12px 16px;
  }
`;
