import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./BookShelf";
import Loading from "./loading";
import { Link, Route } from "react-router-dom";
class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    currentlyReadingShelf: [],
    wantToReadShelf: [],
    readShelf: [],
    noneShelf: [],
    searchResult: [],
    enableLoading: true,
  };

  componentDidMount() {
    const currentlyReadingShelf = [];
    const wantToReadShelf = [];
    const readShelf = [];
    const noneShelf = [];
    BooksAPI.getAll().then((res) => {
      res.forEach((book) => {
        switch (book.shelf) {
          case "currentlyReading":
            currentlyReadingShelf.push(book);
            break;

          case "wantToRead":
            wantToReadShelf.push(book);
            break;

          case "read":
            readShelf.push(book);
            break;

          default:
            noneShelf.push(book);
            break;
        }
      });

      this.setState({
        currentlyReadingShelf,
        wantToReadShelf,
        readShelf,
        noneShelf,
        enableLoading: false,
      });
    });
  }

  onChangeShelf = (book, value) => {
    this.setState({
      enableLoading: true,
    });
    // console.log(book , event);

    BooksAPI.update(book, value).then((res) => {
      // console.log(res);

      const currentlyReadingShelf = [];
      res.currentlyReading.map((bookId) => {
        return BooksAPI.get(bookId).then((response) => {
          currentlyReadingShelf.push(response);
          this.setState({ currentlyReadingShelf });
        });
      });

      const wantToReadShelf = [];
      res.wantToRead.map((bookId) => {
        return BooksAPI.get(bookId).then((response) => {
          wantToReadShelf.push(response);
          this.setState({ wantToReadShelf });
        });
      });

      const readShelf = [];
      res.read.map((bookId) => {
        return BooksAPI.get(bookId).then((response) => {
          readShelf.push(response);
          this.setState({ readShelf, enableLoading: false });
        });
      });

      // const currentlyReadingShelf = this.state.currentlyReadingShelf.filter((book) => {
      //  if( res.currentlyReading.includes(book.id) ) return book
      //   // return res.currentlyReading.filter((b) => b === book.id);
      // });
      // const wantToReadShelf = this.state.wantToReadShelf.filter((book) => {
      //   if(res.wantToRead.includes(book.id)) return book

      //   // return res.wantToRead.filter((b) => b === book.id);
      // });
      // const readShelf = this.state.readShelf.filter((book) => {
      //  if(res.read.includes(book.id)) return book

      //   // return res.read.filter((b) => b === book.id);
      // });
    });
  };

  onSearch = (event) => {
    this.setState({
      enableLoading: true,
    });
    let searchResult = [...this.state.searchResult];
    BooksAPI.search(event.target.value).then((res) => {
      searchResult = res;
      this.setState({ searchResult, enableLoading: false });
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.enableLoading ? (
          <Loading />
        ) : (
          <div className="app">
            <Route
              exact
              path="/search"
              render={() => (
                <div className="search-books">
                  <div className="search-books-bar">
                    <Link
                      className="close-search"
                      to="/">
                      Close
                    </Link>
                    <div className="search-books-input-wrapper">
                      <input
                        type="text"
                        placeholder="Search by title or author"
                        onChange={this.onSearch}
                      />
                    </div>
                  </div>
                  <div className="search-books-results">
                    {this.state.searchResult && (
                      <BookShelf
                        onChange={this.onChangeShelf}
                        title={"search result"}
                        booksArray={this.state.searchResult}
                      />
                    )}
                  </div>
                </div>
              )}
            />
            
            <Route
              exact
              path="/"
              render={() => (
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                    <div>
                      <BookShelf
                        onChange={this.onChangeShelf}
                        title={"Currently Reading"}
                        booksArray={this.state.currentlyReadingShelf}
                      />
                      <BookShelf
                        onChange={this.onChangeShelf}
                        title={"Want to Read"}
                        booksArray={this.state.wantToReadShelf}
                      />
                      <BookShelf
                        onChange={this.onChangeShelf}
                        title={"Read"}
                        booksArray={this.state.readShelf}
                      />
                    </div>
                  </div>
                  <div className="open-search">
                    <Link to="/search">Add a book</Link>
                  </div>
                </div>
              )}
            />
            
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default BooksApp;
