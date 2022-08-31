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
                <img
                  src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  width="150px"
                />
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
