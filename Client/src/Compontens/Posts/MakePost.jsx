import { useState } from "react";
import Input from "../InputFields/Input";
import classNames from "classnames/bind";
import styles from "./MakePost.module.scss";
import "./MakePost.css";
const cx = classNames.bind(styles);
function MakePosts() {
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some Desc");
  const tags = ["None", "NSFW", "GOOD", "MOOD"];
  return (
    <>
      <section className={cx("makepost-container")}>
        <div className={cx("makePost-navigation")}>
          <p className={cx("makePost-save")}>Post</p>
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
            <button key={index} className={`makepost-tags-${tag}`}>
              {tag}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default MakePosts;
