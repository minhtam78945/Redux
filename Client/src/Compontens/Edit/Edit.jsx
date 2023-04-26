import classNames from "classnames/bind";
import styles from "./Edit.module.scss";
import { useState } from "react";
import Input from "../InputFields/Input";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../Redux/userSlice";
const cx = classNames.bind(styles);
function EditPage(props) {
  const { setEdit } = props;
  const avaURl = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8oXBFDk-1LzxiSKuaweuH2kPLwMMyjT6tQ&usqp=CAU",
    "https://o.vdoc.vn/data/image/2022/12/02/anh-tet-de-thuong-cute-25.jpg",
    "https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-56.jpg",
  ];
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(user.avatarUrl);
  const handlerSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updateUser = {
      name: name,
      age: age,
      about: about,
      avatarUrl: url,
      themeColor: theme,
    };
    dispatch(update(updateUser));
  };
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <div className={cx("edit-container")}>
          <button className={cx("action-save")}>Save</button>
          <div className={cx("edit-profile")}>Edit Profile</div>
          <div className={cx("input-fileds")}>
            <Input label="Display Name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />
            <Input
              inpuType="textarea"
              className="input_about"
              label="About"
              data={user.about}
              setData={setAbout}
            />
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
