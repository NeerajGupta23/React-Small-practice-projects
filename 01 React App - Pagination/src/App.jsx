import { useState } from "react";
import PagingContent from "./component/PagingContent/PagingContent.jsx";
import PagingIndex from "./component/PagingIndex/PagingIndex.jsx";
import { data } from "./data/record.js";

const SIZE = 3;

function getTotalPages() {
  // if length is zero then return undefined otherwise return totalPages

  const dataLength = data.length;
  return Math.ceil(dataLength / SIZE);
}

function App() {
  const [startIndex, setStartIndex] = useState(1);
  const totalPage = getTotalPages();

  function onChangeIndex(button) {
    if (button === "left") {
      setStartIndex((prevIndex) => prevIndex - 1);
    } else {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <>
      <PagingContent start={(startIndex - 1) * SIZE} size={SIZE} />
      <PagingIndex
        changeIndex={onChangeIndex}
        totalPage={totalPage}
        currPage={startIndex}
      />
    </>
  );
}

export default App;
