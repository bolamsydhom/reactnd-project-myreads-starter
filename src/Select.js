import React, { Component } from 'react'

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectElements: [],
        };
      }
    
    componentDidMount(){
        const selectElements = [
            { name: "Currently Reading", value: "currentlyReading" },
            { name: "Want to Read", value: "wantToRead" },
            { name: "Read", value: "read" },
            { name: "None", value: "none" }
          ];

          this.setState({selectElements})
    }
    render() {
        const {shelf}= this.props ; 
        return (
            <select value={shelf} onChange={this.props.onChange}>
            <option value="move" disabled>Move to...</option>
            {this.state.selectElements.map(el =>  <option key={el.value} value={el.value}>{el.name}</option>)}
    
          </select>
        )
    }
}
