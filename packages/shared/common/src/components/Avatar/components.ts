import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div<{ width?: string; height?: string }>`
  ${({ width = "2.25rem", height = "2.25rem" }) => css`
    width: ${width};
    height: ${height};
  `}

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
