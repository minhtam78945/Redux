import classNames from "classnames/bind";
import styles from "../Edit/Edit.module.scss";
const cx = classNames.bind(styles);
function Input(props) {
  const { data, setData, label, inpuType, clasName } = props;
  return (
    <>
      <label>{label}</label>
      {inpuType == "textarea" ? (
        <textarea
          type="text"
          className={cx(clasName)}
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
