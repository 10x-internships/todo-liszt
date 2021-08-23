export interface SidebarItemProps extends React.ComponentPropsWithRef<"li"> {
  href?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  isCollapsed?: boolean;
  isActive?: boolean;
}
