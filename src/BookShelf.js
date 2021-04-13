import React, { Component } from "react";
import Book from './Book'


class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectElements: [],
    };
  }
  componentDidMount() {
    //   console.log(this.props.booksArray);
    const selectElements = [
      { name: "Currently Reading", value: "currentlyReading" },
      { name: "Want to Read", value: "wantToRead" },
      { name: "Read", value: "read" },
      { name: "None", value: "none" }
    ];

    this.setState({selectElements})
  }
  render() {
    const { title , booksArray} = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          
                {
                    booksArray.map(book => <Book onChange={(e)=>this.props.onChange(book, e.target.value)} key={book.id} book={book} selectElements={this.state.selectElements} shelf={book.shelf}/>)
                }
                
       
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
