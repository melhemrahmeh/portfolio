import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  margin: 40px 0 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 24px 0 8px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.surface1};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  padding: 26px 24px;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.borderStrong};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px 18px;
    border-radius: ${(props) => props.theme.radii.md};
  }
`;

export const IconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${(props) => props.theme.radii.md};
  background: rgba(148, 93, 214, 0.14);
  border: 1px solid rgba(148, 93, 214, 0.28);
  color: ${(props) => props.theme.colors.cyan};
  margin-bottom: 18px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 40px;
    height: 40px;
    margin-bottom: 14px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ListTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 14px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 6px;
  }
`;
