import { useState } from "react";
import Input from "../InputFields/Input";
import classNames from "classnames/bind";
import styles from "./MakePost.module.scss";
import "./MakePost.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../Redux/postSlice";
const cx = classNames.bind(styles);
function MakePosts(props) {
  const { setOpen } = props;
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some Desc");
  const [selectIndex, setSelectIndex] = useState(0);
  const tags = ["None", "NSFW", "GOOD", "MOOD"];
  const dispatch = useDispatch();
  const handlerPost = () => {
    setOpen(false);
    const newPost = {
      title: title,
      desciption: desc,
      tag: selectIndex,
    };
    dispatch(createPost(newPost));
  };
  return (
    <>
      <section className={cx("makepost-container")}>
        <div className={cx("makePost-navigation")}>
          <p className={cx("makePost-save")} onClick={handlerPost}>
            Post
          </p>
        </div>
        <Input
          label="Title"
          data={title}
          inputTitle
          inpuType="textarea"
          setData={setTitle}
        />
        <Input
          label="Title"
          data={desc}
          inpuType="textarea"
          inputDesc
          setData={setDesc}
        />
        <label>Tags</label>
        <div className={cx("makepost-tags")}>
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`${
                selectIndex === index
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectIndex(index)}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default MakePosts;
