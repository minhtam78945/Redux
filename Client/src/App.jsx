import { useState } from "react";
import Header from "./Compontens/Header/Header.jsx";
import EditPage from "./Compontens/Edit/Edit.jsx";
import { useSelector } from "react-redux";
import FooterPost from "./Compontens/FooterPost/FooterPost.jsx";
import MakePosts from "./Compontens/Posts/MakePost.jsx";
import Post from "./Compontens/Posts/Post.jsx";
function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpenPost] = useState(false);
  const pending = useSelector((state) => state?.user?.loading);
  const errorUpdateUser = useSelector((state) => state?.user?.error);

  return (
    <>
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <Post />
          {pending && <p className="loading">loading...</p>}
          {!errorUpdateUser && (
            <FooterPost setOpenPost={setOpenPost} isOpenPost={isOpenPost} />
          )}
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePosts setOpen={setOpenPost} />
          <FooterPost setOpenPost={setOpenPost} isOpenPost={isOpenPost} />
        </>
      )}
      {errorUpdateUser && <p className="">Can't edit Profile</p>}
    </>
  );
}

export default App;
