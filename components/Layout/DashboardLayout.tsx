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

const DashboardLayout: React.FC = ({ children }) => {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(true);

  const handleSidebarCollapsed = () => setIsSideBarCollapsed(!isSideBarCollapsed);

  return (
    <DashboardWrapper>
      <Sidebar isCollapsed={isSideBarCollapsed} />

      <DashboardContent>
        <DashboardNav onSidebarCollapsed={handleSidebarCollapsed} />
        <main>{children}</main>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default DashboardLayout;
