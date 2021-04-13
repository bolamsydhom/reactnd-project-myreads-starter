import React, { Component } from "react";
import Select from "./Select";


export default class Book extends Component {

  

  render() {
    const { book, selectElements } = this.props;
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
                selectElements={selectElements}
                shelf={book.shelf}
                onChange={this.props.onChange}
              />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
        </div>
      </li>
    );
  }
}