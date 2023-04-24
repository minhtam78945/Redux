import { useState } from "react";
import Header from "./Compontens/Header/Header.jsx";
import EditPage from "./Compontens/Edit/Edit.jsx";
function App() {
  const [isEdit, setEdit] = useState(false);
  return (
    <>
      {isEdit ? (
        <>
          {" "}
          <EditPage />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
        </>
      )}
    </>
  );
}

export default App;
