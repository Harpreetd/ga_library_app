import React from "react";
import booklist from "../jsonData/bookList.js";

export const Cards = () => {
  return (
    <>
      <div className="cards-container">
        {booklist.map((data, key) => {
          return (
            <div key={key} className="card-container">
              <div className="card">
                <h2>{data.title}</h2>
                <p>{data.studyLine}</p>
                <p>{data.authorName}</p>
                <p>{data.isbn}</p>
                <p>{data.id}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
