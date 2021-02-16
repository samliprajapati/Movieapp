import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function Navmenu() {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link to="/tab1">Tab1</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/tab2">Tab2</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default Navmenu;
