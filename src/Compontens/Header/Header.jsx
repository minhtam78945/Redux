import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);
function Header({ setEdit }) {
  const handlerClick = () => {
    setEdit(true);
  };
  return (
    <>
      <header>
        <div className={cx("infor_container")}>
          <div className={cx("infor_edit")} onClick={handlerClick}>
            Edit
          </div>
          <img
            src="https://img.lovepik.com/free-png/20211204/lovepik-cartoon-avatar-png-image_401302777_wh1200.png"
            className={cx("infor_avatar")}
            alt="user_infor_image"
          />
          <div className={cx("infor_username")}>Minh Tam</div>
          <div className={cx("infor_age")}>20 years ago</div>
          <div className={cx("infor_about")}>I'm a software engineer</div>
        </div>
      </header>
    </>
  );
}

export default Header;
