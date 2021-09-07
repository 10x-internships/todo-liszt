import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './components';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { selectIsSidebarCollapsed } from '@redux/selectors/ui';
import { toggleSidebar } from '@redux/actions/ui';

const DashboardLayout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useSelector(selectIsSidebarCollapsed);

  const handleSidebarToggle = () => dispatch(toggleSidebar());

  return (
    <Styled.DashboardWrapper>
      <Styled.SidebarWrapper isCollapsed={isSidebarCollapsed}>
        <Sidebar isCollapsed={isSidebarCollapsed} />
      </Styled.SidebarWrapper>

      <Styled.DashboardContent>
        <Navbar isSidebarCollapsed={isSidebarCollapsed} onSidebarCollapsed={handleSidebarToggle} />
        <Styled.DashboardMain>{children}</Styled.DashboardMain>
      </Styled.DashboardContent>
    </Styled.DashboardWrapper>
  );
};

export default DashboardLayout;
