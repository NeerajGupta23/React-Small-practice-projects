import "./Todo_Section_small.css";
import BackForwardButton from "../BackForwardButton/BackForwardButton";
import { useState } from "react";
import data from "../../data.json";

export default function Todo_Secion_Small({
  index,
  title,
  Due_Date,
  onSelect,
}) {
  let arrow = ">";
  let [myData, setMyData] = useState(data);

  function changeComplete() {
    let dataComplete = myData.data_Array[index].complete;
    myData.data_Array[index].complete = !dataComplete;
    console.log(myData);
    setMyData(myData);
  }

  return (
    <section className="todo-component-small">
      <div id="todo-component-id">{index + 1}</div>
      <div id="todo-detail">
        <div id="todo-header-small">
          <span id="todo-title-small">{title}</span>
          <span id="completed-small" className="float-right">
            <input onClick={changeComplete} type="checkbox" checked />
            {myData.data_Array[index].complete && "Completed"}
            {!myData.data_Array[index].complete && "Complete"}
          </span>
        </div>
        <div id="todo-time-small">
          <span>Due Date : {Due_Date}</span>
          <span className="float-right-more">
            <BackForwardButton onSelect={onSelect}>{arrow}</BackForwardButton>
          </span>
        </div>
      </div>
    </section>
  );
}
