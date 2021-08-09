import { useState } from 'react';
import styled from '@emotion/styled';

import Sidebar from '@components/Sidebar';
import DashboardNav from '@components/Nav/DashboardNav';

const DashboardWrapper = styled.div`
  display: flex;
  min-height: 100vh;
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
      <Sidebar isCollapsed={isSideBarCollapsed} />

      <DashboardContent>
        <DashboardNav onSidebarCollapsed={handleSidebarCollapsed} />
        <DashboardMain>{children}</DashboardMain>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default DashboardLayout;
