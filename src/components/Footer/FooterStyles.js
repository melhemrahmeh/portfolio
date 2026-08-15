import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1040px;
  padding: 40px 48px 48px;
  margin: 64px auto 0;
  box-sizing: content-box;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 32px 32px 40px;
    margin-top: 48px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 24px 16px 40px;
    margin-top: 32px;
    box-sizing: border-box;
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid ${(props) => props.theme.colors.border};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 32px;
  padding: 40px 0 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 28px 0 24px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const LinkTitle = styled.h4`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textSubtle};
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
    margin-bottom: 6px;
  }
`;

export const LinkItem = styled.a`
  font-size: 16px;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textMuted};
  transition: 0.3s ease;
  word-break: break-word;

  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const Slogan = styled.p`
  color: ${(props) => props.theme.colors.textMuted};
  letter-spacing: 0.01em;
  font-size: 16px;
  line-height: 1.6;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const Copyright = styled.p`
  color: ${(props) => props.theme.colors.textSubtle};
  font-size: 13px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
