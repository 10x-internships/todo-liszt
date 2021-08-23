import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 1.5rem 1.5rem 2rem;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  transition: var(--transition);
`;

export const SettingsTabs = styled.div`
  & button + button {
    margin-left: 1rem;
  }
`;

export const SettingsContent = styled.div`
  margin-top: 2rem;
`;
