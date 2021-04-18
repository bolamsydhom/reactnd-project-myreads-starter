import React from "react";
import Book from "./Book";

function BookShelf(props) {
      const { title, booksArray } = props;
    //   console.log(booksArray);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksArray.length > 0 ?
              booksArray.map((book) => (
                <Book
                  onChange={(e) => this.props.onChange(book, e.target.value)}
                  key={book.id}
                  book={book}
                />
              )):
              <li>Kindly enter another search keyword</li>
              }
          </ol>
        </div>
      </div>
    );
  
}

export default BookShelf;
