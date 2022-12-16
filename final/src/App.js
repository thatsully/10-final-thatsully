import React, { Component } from 'react';
import './App.css';
import newFact from './newFact';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.deleteB = this.deleteB.bind(this);
    }

    componentDidMount(){

    }

    deleteB = event =>{
        console.log(event.target.id);
    }

    render() {
        return (
            <div className="mainSection">
                <div className="button-area">
                    <h1>Random Cat & Dog Facts</h1>
                    <button id="generate-fact-button">Generate a Random Cat Fact</button>
                    <button id="generate-fact-button">Generate a Random Dog Fact</button>
                </div>
                <div className="facts">
                    <newFact deleteB={this.deleteB}/>
                </div>
            </div>
        )
    }
}

export default App;
