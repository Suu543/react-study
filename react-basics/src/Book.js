import React from "react";

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  const complexHandler = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexHandler(author)}>
        More Complex Example
      </button>
    </article>
  );
};

export default Book;
