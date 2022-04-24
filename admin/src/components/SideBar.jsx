import React from 'react'
import "../css/sideBar.css"
import { NavLink  } from "react-router-dom";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@material-ui/icons";


function SideBar() {
  return (
      <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3>Dashboard</h3>
          <ul>
            <NavLink  to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <li  >
              <LineStyle  />
              Home
            </li>
            </NavLink>
            <li >
              <Timeline />
              Analytics
            </li>
            <li >
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 >Products</h3>
          <ul >
            <NavLink  to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
              <li >
                <Storefront  />
                Products
              </li>
            </NavLink>
            <NavLink  to="/product/add" className={({ isActive }) => (isActive ? "active" : "")}>
              <li >
                <Storefront  />
                Add Product
              </li>
            </NavLink>
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 >Users</h3>
          <ul >
          <NavLink  to="/users" className={({ isActive }) => (isActive ? "active" : "")} >
              <li >
                <Storefront  />
                All Users
              </li>
            </NavLink>
            <NavLink  to="/user/add" className={({ isActive }) => (isActive ? "active" : "")} >
              <li >
                <Storefront  />
                Add User
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 >News Letter</h3>
          <ul>
          <NavLink  to="/news" className={({ isActive }) => (isActive ? "active" : "")} >
              <li >
                <Storefront  />
                Show Subscribers
              </li>
            </NavLink>
            <li >
              <Timeline  />
              Analytics
            </li>
            <li >
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar