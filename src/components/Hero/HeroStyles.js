import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AvatarRing = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  padding: 3px;
  margin-bottom: 20px;
  background: ${(props) => props.theme.gradients.primary};

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    background: ${(props) => props.theme.colors.surface2};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 72px;
    height: 72px;
    margin-bottom: 14px;
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

  strong {
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${(props) => props.theme.colors.green};
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

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 4px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 10px;
    width: 100%;
  }
`;

export const PrimaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  padding: 14px 26px;
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
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textMuted};
  padding: 14px 22px;
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
