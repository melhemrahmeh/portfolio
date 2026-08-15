import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: ${(props) =>
    props.$scrolled ? 'rgba(15, 22, 36, 0.88)' : 'rgba(15, 22, 36, 0.55)'};
  backdrop-filter: blur(14px);
  border-bottom: 1px solid
    ${(props) => (props.$scrolled ? props.theme.colors.border : 'transparent')};
  transition:
    background 0.3s ease,
    border-color 0.3s ease;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 14px 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 12px 16px;
  }
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.text};
  transition: 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.cyan};
  }
`;

export const Span = styled.span`
  font-family: ${(props) => props.theme.fonts.title};
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
    gap: 4px;
  }

  /* Replaced by the drawer below this width. */
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  font-size: 15px;
  color: ${(props) => (props.$active ? '#fff' : props.theme.colors.textMuted)};
  padding: 8px 14px;
  border-radius: ${(props) => props.theme.radii.pill};
  transition: 0.25s ease;
  cursor: pointer;

  /* underline grows from the centre on hover / when active */
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 2px;
    transform: translateX(-50%);
    width: ${(props) => (props.$active ? '18px' : '0')};
    height: 2px;
    border-radius: 2px;
    background: ${(props) => props.theme.gradients.primary};
    transition: width 0.25s ease;
  }

  &:hover {
    color: #fff;

    &::after {
      width: 18px;
    }
  }
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
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

/* ---------------------------------------------------------------- drawer */

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.sm};
  color: ${(props) => props.theme.colors.text};
  padding: 8px;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.borderStrong};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: inline-flex;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(6, 10, 18, 0.6);
  backdrop-filter: blur(2px);
  opacity: ${(props) => (props.$open ? 1 : 0)};
  pointer-events: ${(props) => (props.$open ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`;

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 61;
  width: min(320px, 82vw);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 20px;
  background: ${(props) => props.theme.colors.surface1};
  border-left: 1px solid ${(props) => props.theme.colors.border};
  transform: translateX(${(props) => (props.$open ? '0' : '100%')});
  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
  overflow-y: auto;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const DrawerTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textSubtle};
`;

export const DrawerLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.$active ? '#fff' : props.theme.colors.textMuted)};
  background: ${(props) =>
    props.$active ? 'rgba(255,255,255,0.05)' : 'transparent'};
  border-radius: ${(props) => props.theme.radii.sm};
  padding: 14px 14px;
  transition: 0.25s ease;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const DrawerRule = styled.hr`
  border: 0;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  margin: 12px 0;
`;

export const DrawerSocials = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 6px;
`;
