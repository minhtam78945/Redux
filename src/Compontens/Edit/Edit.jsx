import classNames from "classnames/bind";
import styles from "./Edit.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);
function EditPage() {
  const avaURl = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8oXBFDk-1LzxiSKuaweuH2kPLwMMyjT6tQ&usqp=CAU",
    "https://o.vdoc.vn/data/image/2022/12/02/anh-tet-de-thuong-cute-25.jpg",
    "https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-56.jpg",
  ];
  const [name, setName] = useState("Minh Tam");
  const [age, setAge] = useState(20);
  const [about, setAbout] = useState("noppe");
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(
    "https://img.lovepik.com/free-png/20211204/lovepik-cartoon-avatar-png-image_401302777_wh1200.png"
  );
  return (
    <>
      <form>
        <div className={cx("edit-container")}>
          <button className={cx("action-save")}>Save</button>
          <div className={cx("edit-profile")}>Edit Profile</div>
          <div className={cx("input-fileds")}>
            <label>Display Name</label>
            <input
              placeholder="Minh Tam"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Age</label>
            <input
              placeholder="20"
              type="text"
              onChange={(e) => setAge(e.target.value)}
            />
            <label>About</label>
            <textarea
              className="input-about"
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
            <label>Profile Picture</label>
            <div className="flex-wrap flex">
              {avaURl.map((index, key) => (
                <img
                  onClick={(e) => setUrl(e.target.src)}
                  key={key}
                  src={index}
                  className={cx("input-image")}
                  alt="user_Profile"
                />
              ))}
            </div>
          </div>
          <div className={cx("theme-container")}>
            <label>Theme</label>
            <input
              onChange={(e) => setTheme(e.target.value)}
              type="color"
              className={cx("theme-color")}
            />
          </div>
        </div>
      </form>
    </>
  );
}
export default EditPage;
