import { useState } from "react";
import Header from "./Compontens/Header/Header.jsx";
import EditPage from "./Compontens/Edit/Edit.jsx";
import { useSelector } from "react-redux";
import FooterPost from "./Compontens/FooterPost/FooterPost.jsx";
import MakePosts from "./Compontens/Posts/MakePost.jsx";
function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpenPost] = useState(false);
  const pending = useSelector((state) => state?.user?.loading);
  const errorUpdateUser = useSelector((state) => state?.user?.error);
  return (
    <>
      {isEdit ? (
        <>
          {" "}
          <EditPage setEdit={setEdit} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
        </>
      )}
      {pending && <p className="loading">loading...</p>}
      {!isEdit && errorUpdateUser && <p className="">Can't edit Profile</p>}
      <FooterPost setOpenPost={setOpenPost} isOpenPost={isOpenPost} />
      {isOpenPost && <MakePosts />}
    </>
  );
}

export default App;
