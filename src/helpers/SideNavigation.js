import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  // added styles
  const styles = {
    sideBarHeight: {
      height: "100vh"
    },
    menuIcon: {
      // float: "left",
      margin: "10px"
    }
  };
  
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
          <SidebarHeader>
            <div style={styles.menuIcon} onClick={onClickMenuIcon}>
              <AiOutlineMenu />
            </div>
          </SidebarHeader>
         
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}> Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}>Timesheets</MenuItem>
       
        <SubMenu title="Reports" icon={<FaHeart />}>
          <MenuItem>Track Report</MenuItem>
          <MenuItem>Inventory Report</MenuItem>
          <MenuItem>Customer Report</MenuItem>
        </SubMenu>
      
        <SubMenu title="Account" icon={<FaHeart />}>
          <MenuItem>Permissions</MenuItem>
          <MenuItem>Settings</MenuItem>
        </SubMenu>
      
        <SubMenu title="Email" icon={<FaHeart />}>
          <MenuItem>Notification</MenuItem>
     
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideNavigation;