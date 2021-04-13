import React, { Component } from 'react'

export default class Select extends Component {
    render() {
        const {selectElements}= this.props ; 
        return (
            <select>
            <option value="move" disabled>Move to...</option>
            {selectElements.map(el =>  <option value={el.value}>{el.name}</option>)}
    
          </select>
        )
    }
}
