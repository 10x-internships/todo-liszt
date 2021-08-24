import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    width: 50%;
  }

  &:last-child {
    border-radius: 4px;
  }
`;

export const GeneralImage = styled.img`
  max-height: 23.75rem;
  padding-left: 8.75rem;
  border-radius: 4px;
  object-fit: cover;
`;
