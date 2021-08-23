import styled from "@emotion/styled";

export const DashboardWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const SidebarWrapper = styled.aside<{ isCollapsed?: boolean }>`
  position: relative;
  width: ${({ isCollapsed }) => (isCollapsed ? "4rem" : "12.5rem")};
  transition: var(--transition);
`;

export const DashboardContent = styled.div`
  flex: 1;
`;

export const DashboardMain = styled.main`
  min-height: calc(100vh - 4rem);
  padding: 5.5rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
`;
