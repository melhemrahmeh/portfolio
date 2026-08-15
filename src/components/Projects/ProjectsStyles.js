import styled from 'styled-components';

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  width: 100%;
  margin: 40px 0 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 24px 0 8px;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.surface1};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  box-shadow: ${(props) => props.theme.shadows.card};
  overflow: hidden;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${(props) => props.theme.colors.borderStrong};
    box-shadow: ${(props) => props.theme.shadows.cardHover};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    border-radius: ${(props) => props.theme.radii.md};
  }
`;

export const Thumb = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${(props) => props.theme.colors.surface2};
  overflow: hidden;

  /* fade the image into the card body */
  &::after {
    content: '';
    position: absolute;
    inset: auto 0 0 0;
    height: 45%;
    background: linear-gradient(
      to bottom,
      rgba(20, 28, 47, 0),
      ${(props) => props.theme.colors.surface1}
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 18px;
  }
`;

export const Title = styled.h3`
  font-size: 21px;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: ${(props) => props.theme.colors.textMuted};
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 6px;
  }
`;

export const LinkRow = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 18px;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: ${(props) => props.theme.radii.pill};
  transition: 0.3s ease;
  color: ${(props) => (props.$primary ? '#fff' : props.theme.colors.textMuted)};
  background: ${(props) =>
    props.$primary ? props.theme.gradients.primary : 'transparent'};
  border: 1px solid
    ${(props) => (props.$primary ? 'transparent' : props.theme.colors.border)};

  &:hover {
    color: #fff;
    border-color: ${(props) =>
      props.$primary ? 'transparent' : props.theme.colors.borderStrong};
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
    padding: 9px 14px;
  }
`;
