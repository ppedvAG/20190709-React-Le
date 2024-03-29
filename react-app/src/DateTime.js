import React, { Component } from 'react';

export default class DateTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()

        }
      
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    tick() {
        this.setState({
          date: new Date()
        });
      }
    render(){
        return(
            <span>
            {this.state.date.toLocaleDateString()} | {this.state.date.toLocaleTimeString()} 
            </span>
            
        );
    }
}