import classNames from "classnames/bind";
import styles from "./Input.module.scss";
const cx = classNames.bind(styles);
function Input(props) {
  const {
    data,
    setData,
    label,
    inpuType,
    className,
    inputAbout = false,
    inputTitle = false,
    inputDesc = false,
  } = props;
  const classes = cx("wrapper", {
    [className]: className,
    inputAbout,
    inputTitle,
    inputDesc,
  });

  return (
    <>
      <label>{label}</label>
      {inpuType == "textarea" ? (
        <textarea
          type="text"
          className={classes}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
}

export default Input;
