import React, { Component } from 'react';
import './newFact.css';

class NewFact extends Component {
    render() {
        return (
            <div className="fact-container">
                <p id="placeholder">{this.props.text}</p>
                <button type="button" className="deleteB" id={this.props.id} onClick={this.props.deleteB}>X</button>
                {!this.props.saved && <button className="saveB" id={this.props.id} onClick={this.props.saveFact}>Save</button>}
            </div>
        )
    }
}

export default NewFact;