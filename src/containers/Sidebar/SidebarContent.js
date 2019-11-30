import React, {Component} from "react";
import {connect} from "react-redux";
import {Menu, Icon} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";

import Auxiliary from "util/Auxiliary";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";

const SubMenu = Menu.SubMenu

class SidebarContent extends Component {

  getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  render() {
    const {themeType, navStyle, pathname} = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (<Auxiliary>

        <SidebarLogo/>
        <div className="gx-sidebar-content">
          <div className={`gx-sidebar-notifications ${this.getNoHeaderClass(navStyle)}`}>
            <UserProfile/>
            <AppsNavigation/>
          </div>
          <CustomScrollbars className="gx-layout-sider-scrollbar">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme={themeType !== THEME_TYPE_LITE ? 'lite' : 'dark'}
              mode="inline">

              {/*<Menu.Item key="sample">
                <Link to="/sample"><i className="icon icon-widgets"/>
                  <IntlMessages id="sidebar.samplePage"/></Link>
              </Menu.Item>*/}

              {/*<SubMenu key="sub1" title={<span><Icon type="user" /><span style={{color: "#038fde"}}>User Info</span></span>}>
                <Menu.Item key="1">
                  Name: John Doe
                </Menu.Item>
                <Menu.Item key="2">
                  Birth Date: 12/12/1985
                </Menu.Item>
                <Menu.Item key="3">
                  Organization/Vendor: Vender
                </Menu.Item>
                <Menu.Item key="4">
                  Last 4 digits of SSN: **** 5698
                </Menu.Item>
                <Menu.Item key="5">
                  User’s Department ID: 568
                </Menu.Item>
                <Menu.Item key="6">
                  Employee ID: 986
                </Menu.Item>
                <Menu.Item key="7">
                  Email Address: testuser@gmail.com
                </Menu.Item>
                <Menu.Item key="8">
                  Phone Number: 9876543210
                </Menu.Item>
              </SubMenu>*/}
              <SubMenu key="sub2" title={<span><Icon type="info" /><span style={{color: "#038fde"}}>Agency Info</span></span>}>
                <Menu.Item key="1">
                  Name: Top Agency
                </Menu.Item>
                <Menu.Item key="2">
                  BU: 595441
                </Menu.Item>
                {/*<Menu.Item key="3">
                  Requester Name: Admin
                </Menu.Item>
                <Menu.Item key="4">
                  Requester Edison Access ID: 26565
                </Menu.Item>
                <Menu.Item key="5">
                  Requester Phone Number: 687456
                </Menu.Item>
                <Menu.Item key="6">
                  Requester Email: test@gmail.com
                </Menu.Item>*/}
              </SubMenu>
            </Menu>
          </CustomScrollbars>
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({settings}) => {
  const {navStyle, themeType, locale, pathname} = settings;
  return {navStyle, themeType, locale, pathname}
};
export default connect(mapStateToProps)(SidebarContent);

