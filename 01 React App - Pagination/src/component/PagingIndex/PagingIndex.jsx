import "./PagingIndex.css";
import arrow from "../../svg/arrow.svg";

export default function PagingIndex({ totalPage, currPage, changeIndex }) {
  
  function putContent() {
    const content = [];
    if (totalPage <= 3) {
      for (let i = 1; i <= totalPage; i++) {
        content.push(
          <li key={i} id={i === currPage ? "circle" : undefined}>
            {i}
          </li>
        );
      }
    } else {
      content.push(<li id={currPage === 1 ? "circle" : undefined}>1</li>);
      content.push(<li>..</li>);
      content.push(
        <li
          id={currPage !== 1 && currPage !== totalPage ? "circle" : "disabled"}
        >
          {currPage}
        </li>
      );
      content.push(<li>..</li>);
      content.push(
        <li id={currPage === totalPage ? "circle" : undefined}>{totalPage}</li>
      );
    }
    return content;
  }
  
  const content = putContent();

  return (
    <div id="page_index">
      <button
        onClick={() => changeIndex("left")}
        disabled={currPage === 1}
        className="svg_arrow_div"
      >
        <img className="rotate-reverse" src={arrow} alt="My Happy SVG" />
      </button>

      <div className="arrow_mid">
        {content.map((list) => (
          <>{list}</>
        ))}
      </div>

      <button
        onClick={() => changeIndex("right")}
        disabled={currPage === totalPage}
        className="svg_arrow_div"
      >
        <img src={arrow} alt="My Happy SVG" />
      </button>
    </div>
  );
}
