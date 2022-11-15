import React from 'react'
import { Outlet } from "react-router-dom";
import Styles from "./Pages.module.css";
import SideBar from '../components/SideBar';


const Dashboard = () => {
  return (
    <div className={Styles.dashboard}>
        <div className={Styles.sidebar}>
          <SideBar />
        </div>
        <div className={Styles.right_side}>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard