import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: rgba(15, 22, 36, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    padding: 12px 16px;
  }
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.colors.text};
  transition: 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.cyan};
  }
`;

export const Span = styled.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    order: 3;
    width: 100%;
    justify-content: center;

    ul {
      gap: 2px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const NavLink = styled(Link)`
  display: inline-block;
  font-size: 15px;
  color: ${(props) => props.theme.colors.textMuted};
  padding: 8px 14px;
  border-radius: ${(props) => props.theme.radii.pill};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    padding: 6px 9px;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SocialIcons = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textMuted};
  border-radius: 50%;
  padding: 8px;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.theme.colors.surface2};
    transform: scale(1.1);
  }
`;
