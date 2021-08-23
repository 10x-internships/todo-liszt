import { useState } from "react";

import * as Styled from "./components";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const DashboardLayout: React.FC = ({ children }) => {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(true);

  const handleSidebarCollapsed = () =>
    setIsSideBarCollapsed(!isSideBarCollapsed);

  return (
    <Styled.DashboardWrapper>
      <Styled.SidebarWrapper isCollapsed={isSideBarCollapsed}>
        <Sidebar isCollapsed={isSideBarCollapsed} />
      </Styled.SidebarWrapper>

      <Styled.DashboardContent>
        <Navbar
          isSidebarCollapsed={isSideBarCollapsed}
          onSidebarCollapsed={handleSidebarCollapsed}
        />
        <Styled.DashboardMain>{children}</Styled.DashboardMain>
      </Styled.DashboardContent>
    </Styled.DashboardWrapper>
  );
};

export default DashboardLayout;
