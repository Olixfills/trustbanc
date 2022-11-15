import React from 'react'
import logo from '../assets/TrustBanc.svg'
import Styles from './Comp.module.css'


import { ReactComponent as BagIcon } from "../assets/bag.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as CardIcon } from "../assets/card.svg";
import { ReactComponent as SettingsIcon } from "../assets/settings.svg";
import { ReactComponent as TransIcon } from "../assets/trans.svg";
import { ReactComponent as TargetIcon } from "../assets/stocks.svg";
import { ReactComponent as LogoutIcon } from "../assets/logout.svg";





const menuItems = [
  {icon: <HomeIcon />, title: 'Home', active: true},
  {icon: <TransIcon />, title: 'Transfers', active: false, bord: true},
  {icon: <TargetIcon />, title: 'Target Savings', active: false, bord: true},
  {icon: <PhoneIcon />, title: 'Airtime and Bills', active: false},
  {icon: <CardIcon />, title: 'Cards', active: false},
  {icon: <BagIcon />, title: 'Loans', active: false, bord: true},
  {icon: <SettingsIcon />, title: 'Settigs', active: false},
]


const SideBar = () => {
  return (
    <div className={Styles.sideBar_cont}>
      <img src={logo} alt="" />
      <div className={Styles.menuitems_list}>
        {menuItems.map((item)=> <div key={item.title} className={Styles.menu_item}>
          <div className={item.bord && Styles.icon_cont}>{item.icon}</div>
          <p className={item.active && Styles.active}>{item.title}</p>
        </div>)}
      </div>
      <div className={Styles.logout}>
        <LogoutIcon />
        <p>Logout</p>
      </div>
    </div>
  )
}

export default SideBar