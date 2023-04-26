import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);
function Header({ setEdit }) {
  const handlerClick = () => {
    setEdit(true);
  };
  const user = useSelector((state) => state.user);
  return (
    <>
      <header
        style={{
          backgroundColor: `${user.themeColor}`,
          backgroundImage: `linear-gradient(180deg,${user.themeColor},2%,${user.themeColor},65%,#181818 100%)`,
        }}
      >
        <div className={cx("infor_container")}>
          <div className={cx("infor_edit")} onClick={handlerClick}>
            Edit
          </div>
          <img
            src={user.avatarUrl}
            className={cx("infor_avatar")}
            alt="user_infor_image"
          />
          <div className={cx("infor_username")}>{user.name}</div>
          <div className={cx("infor_age")}>{user.age}</div>
          <div className={cx("infor_about")}>{user.about}</div>
        </div>
      </header>
    </>
  );
}

export default Header;
