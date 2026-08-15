import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 640px;
  background: ${(props) => props.theme.colors.surface1};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  padding: 32px;
  margin-bottom: 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px 18px;
    gap: 16px;
    border-radius: ${(props) => props.theme.radii.md};
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textMuted};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
  }
`;

const fieldStyles = (props) => `
  width: 100%;
  font-family: ${props.theme.fonts.main};
  font-size: 16px;
  line-height: 1.5;
  color: ${props.theme.colors.text};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${props.theme.colors.border};
  border-radius: ${props.theme.radii.sm};
  padding: 14px 16px;
  transition: border-color 0.25s ease, background 0.25s ease;

  &::placeholder {
    color: ${props.theme.colors.textSubtle};
  }

  &:hover {
    border-color: ${props.theme.colors.borderStrong};
  }

  &:focus {
    outline: none;
    border-color: ${props.theme.colors.cyan};
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const Input = styled.input`
  ${(props) => fieldStyles(props)}

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    padding: 12px 14px;
  }
`;

export const TextArea = styled.textarea`
  ${(props) => fieldStyles(props)}
  min-height: 160px;
  resize: vertical;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    padding: 12px 14px;
    min-height: 130px;
  }
`;

export const SubmitButton = styled.button`
  align-self: flex-start;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  background: ${(props) => props.theme.gradients.primary};
  border: none;
  border-radius: ${(props) => props.theme.radii.pill};
  padding: 15px 34px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px -12px rgba(19, 173, 199, 0.8);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    align-self: stretch;
    font-size: 15px;
    padding: 13px 24px;
  }
`;

export const DirectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
`;

export const DirectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.textMuted};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.pill};
  padding: 11px 18px;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    border-color: ${(props) => props.theme.colors.borderStrong};
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
    padding: 9px 14px;
  }
`;

export const FormStatus = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) =>
    props.$error ? '#ff8a75' : props.theme.colors.textMuted};
`;
