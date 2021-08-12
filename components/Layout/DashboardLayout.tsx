import { useState } from 'react';
import styled from '@emotion/styled';

import Sidebar from '@components/Sidebar';
import DashboardNav from '@components/Nav/DashboardNav';

const DashboardWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const SidebarWrapper = styled.aside<{ isCollapsed?: boolean }>`
  position: relative;
  width: ${({ isCollapsed }) => (isCollapsed ? '4rem' : '12.5rem')};
  transition: var(--transition);
`;

const DashboardContent = styled.div`
  flex: 1;
`;

const DashboardMain = styled.main`
  min-height: calc(100vh - 4rem);
  padding: 1.5rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

const DashboardLayout: React.FC = ({ children }) => {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(true);

  const handleSidebarCollapsed = () => setIsSideBarCollapsed(!isSideBarCollapsed);

  return (
    <DashboardWrapper>
      <SidebarWrapper isCollapsed={isSideBarCollapsed}>
        <Sidebar isCollapsed={isSideBarCollapsed} />
      </SidebarWrapper>

      <DashboardContent>
        <DashboardNav onSidebarCollapsed={handleSidebarCollapsed} />
        <DashboardMain>{children}</DashboardMain>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default DashboardLayout;
