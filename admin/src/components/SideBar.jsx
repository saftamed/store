import React from 'react'
import "../css/sideBar.css"
import { Link } from "react-router-dom";
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
            <Link to="/">
            <li className="active">
              <LineStyle  />
              Home
            </li>
            </Link>
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
          <h3 >Quick Menu</h3>
          <ul >
            <Link to="/users" >
              <li>
                <PermIdentity />
                Users
              </li>
            </Link>
            <Link to="/products" >
              <li >
                <Storefront  />
                Products
              </li>
            </Link>
            <li >
              <AttachMoney  />
              Transactions
            </li>
            <li >
              <BarChart />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 >Notifications</h3>
          <ul >
            <li>
              <MailOutline  />
              Mail
            </li>
            <li>
              <DynamicFeed  />
              Feedback
            </li>
            <li >
              <ChatBubbleOutline  />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 >Staff</h3>
          <ul>
            <li>
              <WorkOutline />
              Manage
            </li>
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