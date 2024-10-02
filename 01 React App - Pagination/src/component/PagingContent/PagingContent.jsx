import "./PagingContent.css";
import { data } from "../../data/record.js";

function extractData(start, size) {
  let contents = [];
  for (let i = start; i < start + size; i++) {
    if(data[i] === undefined) {
      break;
    }
    contents.push(data[i]);
  }

  return contents;
}

export default function PagingContent({ start, size }) {
  const contents = extractData(start, size);

  return (
    <>
      <div id="user-content-container">
        {contents.map((item) => (
          <div key={item.id} className="user-content">
            <div className="row-header">
              <span>Id </span>
              <span> : </span>
              <span>{item.id}</span>
            </div>
            <div className="row">
              <span>Attribute 01</span>
              <span> : </span>
              <span>{item.attribute1}</span>
            </div>
            <div className="row">
              <span>Attribute 02</span>
              <span> : </span>
              <span>{item.attribute2}</span>
            </div>{" "}
            <div className="row">
              <span>Attribute 03</span>
              <span> : </span>
              <span>{item.attribute3}</span>
            </div>{" "}
            <div className="row">
              <span>Attribute 04</span>
              <span> : </span>
              <span>{item.attribute4}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
