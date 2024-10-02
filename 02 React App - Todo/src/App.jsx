import { useState } from "react";
import Todo_Secion from "./component/Todo_Section/Todo_Section.jsx";
import Todo_Secion_Small from "./component/Todo_Section_Small/Todo_Section_Small.jsx";
import data from "./data.json";
import AddButton from "./component/AddButtom/AddButton.jsx";
import AddForm from "./component/AddForm/AddForm.jsx";

function App() {
  let [content, setContent] = useState(
    <div className="text-[35px] font-semibold text-center pt-24">
      Add New Task
    </div>
  );

  function changeContent(type) {

  }

  return (
    <>
      {/* <AddButton onClick={() => changeContent("form")}>+</AddButton>
      {content} */}
      <AddForm/>
    </>
  );
}

export default App;
