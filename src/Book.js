import React, { Component } from 'react'
import Select from './Select'



export default class Book extends Component {
    
    render() {
        const { url, bookTitle, bookAuthor, selectElements} = this.props;
        return (
            <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                    `url("${url}")`,
                }}
              />
              <div className="book-shelf-changer">
                <Select selectElements={selectElements}/>
              </div>
            </div>
            <div className="book-title">{bookTitle}</div>
            <div className="book-authors">{bookAuthor}</div>
          </div>
        )
    }
}
