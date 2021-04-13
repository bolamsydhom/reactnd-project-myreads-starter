import React, { Component } from "react";
import Select from "./Select";


export default class Book extends Component {

  

  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${book.imageLinks && book.imageLinks.smallThumbnail}")`,
              }}
            />
            <div className="book-shelf-changer">
              <Select
                shelf={book.shelf}
                onChange={this.props.onChange}
              />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors && book.authors.map((author, index) =>  <div key={index} className="book-authors">{author}</div>)}
         
        </div>
      </li>
    );
  }
}
