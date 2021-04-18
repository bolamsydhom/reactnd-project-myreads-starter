# MyReads Project
a project or udacity course

## Getting Started
* Clone this project
```bash
npm i
npm start
```
## structure
you will find the front end part is separated into multiple components
* [Book.js](/) --> To style and right the logic related to the book entity itself
* [BookShelf.js](/) --> To style and right the logic related to the shelf entity and map over the bookArray
* [loading.js](/) --> TO visually fill the time the query will take to fetch the data

### backEnd APIs
* BooksAPI.js --> cantinas some functions that are responsible for fetching data ex:    
    * [getAll()](): returns a promise that will resolve all books
    * [get(bookId)](): returns a promise that will resolve one book that wil match the bookId 
    * [search(query)](): returns a promise that will resolve the search result that match the query
    * [update(book, shelf)](): updates the shelf that the book belongs to