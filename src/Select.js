import React, { Component } from 'react'

export default class Select extends Component {
    render() {
        const {selectElements, shelf}= this.props ; 
        return (
            <select defaultValue={shelf} onChange={this.props.onChange}>
            <option value="move" disabled>Move to...</option>
            {selectElements.map(el =>  <option key={el.value} defaultValue={shelf === el.value} value={el.value}>{el.name}</option>)}
    
          </select>
        )
    }
}
