import React from "react";
import Styles from "./Pages.module.css";

import { ReactComponent as AvatarIcon } from "../assets/avatar.svg";
import { ReactComponent as CcIcon } from "../assets/ccc.svg";
import { ReactComponent as LeftIcon } from "../assets/left.svg";
import { ReactComponent as RightIcon } from "../assets/right.svg";
import { ReactComponent as UpIcon } from "../assets/up.svg";
import { ReactComponent as DownIcon } from "../assets/down.svg";

const trans = [
  {
    icon: <DownIcon />,
    title: "E-CHANNELS",
    ref: "0000015262626273663766262673663672.",
    amt: "NGN -1,400.00",
  },
  {
    icon: <UpIcon />,
    title: "E-CHANNELS",
    ref: "0000015262626273663766262673663672.",
    amt: "NGN +2,400.00",
  },
  {
    icon: <DownIcon />,
    title: "E-CHANNELS",
    ref: "0000015262626273663766262673663672.",
    amt: "NGN -1,400.00",
  },
  {
    icon: <DownIcon />,
    title: "E-CHANNELS",
    ref: "0000015262626273663766262673663672.",
    amt: "NGN -1,400.00",
  },
  {
    icon: <UpIcon />,
    title: "E-CHANNELS",
    ref: "0000015262626273663766262673663672.",
    amt: "NGN +2,400.00",
  },
];

const Home = () => {
  return (
    <div>
      <nav>
        <button className={Styles.trans_btn}>Make a Transfer</button>
        <div className={Styles.avatar_cont}>
          <div>
            <h6>Abati Olawale</h6>
            <p>Click to view Profile</p>
          </div>
          <AvatarIcon />
        </div>
      </nav>

      <main>
        <div className={Styles.left_main}>
          <div className={`${Styles.card} ${Styles.cc_card_cont}`}>
            <p className={Styles.myacc}>My Accounts</p>
            <hr />
            <div className={Styles.ccc}>
              <LeftIcon />
              <CcIcon />
              <RightIcon />
            </div>
          </div>
          <div className={`${Styles.card} ${Styles.cc_card_cont}`}>
            <div className={Styles.trans}>
              <div>
                <p className={Styles.myacc}>Transaction history</p>
                <hr />
              </div>
              <span>Download statement</span>
            </div>

            <div>
              {trans?.map((t, ind) => (
                <div
                  className={`${Styles.card} ${Styles.transDeets}`}
                  key={ind}
                >
                  <div>
                    <div>{t.icon}</div>
                    <div>
                      <p className={Styles.trans_title}>{t.title}</p>
                      <p className={Styles.trans_ref}>{t.ref}</p>
                    </div>
                  </div>
                  <p
                    className={Styles.trans_amt}
                    style={{
                      color: t.amt.includes("-") ? " #F50606" : "#09922F",
                    }}
                  >
                    {t.amt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className={`${Styles.card} ${Styles.right_side}`}>
            <div>
              <p className={Styles.myacc}>Previous /beneficiaries</p>
              <hr />
            </div>
            <p className="beneficiiary_text">
              Click on a beneficiary to make a quick transfer
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
