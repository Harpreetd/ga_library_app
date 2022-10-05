import React from "react";
import booklist from "../../jsonData/bookList.js";

export const Cards = () => {
  return (
    <>
      <div className="cards-container">
        {booklist.map((data, key) => {
          return (
            <div key={key} className="card-container">
              <div className="card">
                <img src={data.image} />
                <h2>{data.title}</h2>

                <p>{data.authorName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
