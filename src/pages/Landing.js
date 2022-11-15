import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import Styles from "./Pages.module.css";
import logo from "../assets/trustBanc-1.svg";
import LoginUser from '../services';

const Landing = () => {
    const navigate = useNavigate()
 const [formData, setFormData] = useState({
    username: '',
    password: '',
})


const onSubmit = (e) => {
    e.preventDefault()
    navigate('/home')
    LoginUser(formData).then(res => console.log(res))

}


  return (
    <div className={Styles.hero}>
      <div className={Styles.hero_overlay}>
        <div className={Styles.login_form_container}>
          <div className={Styles.get_started_cont}>
            <img src={logo} alt="TB logo" className={Styles.gs_logo} />
            <p className={Styles.gs_text}>
              Are you a new customer or an existing customer yet to setup your
              online account?
            </p>
            <button className={Styles.gs_btn}>Get Started</button>
          </div>
          <form className={Styles.form_cont} onSubmit={onSubmit}>
            <p className={Styles.form_text}>Log in to your account</p>
            <input
              type="text"
              name='username'
              className={Styles.form_input}
              placeholder="Username"
              value={formData.username}
              onChange={(e)=> setFormData({...formData, username: e.target.value})}
            />
            <input
              type="password"
              className={Styles.form_input}
              placeholder="Password"
              value={formData.password}
              onChange={(e)=> setFormData({...formData, password: e.target.value})}

            />

            <button type='submit' className={Styles.login_btn}>Login</button>
            <div style={{ width: "100%", textAlign: "right" }}>
              <a href="/" className={Styles.forgot_password}>
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
