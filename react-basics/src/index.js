import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Exactly Same Name
import { books } from "./books.js";
// Default Export You can name it anything you want
// import SpecificBook from "./Book.js"
import Book from "./Book.js";
import { greeting } from "./testing/testing.js";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
