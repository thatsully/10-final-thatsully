import React, { Component } from 'react';
import './newFact.css';

class newFact extends Component {
    render() {
        return (
            <div className="fact-container">
                <p id="placeholder">cats are adorable</p>
                <button type="button" className="deleteB" id="deleteB" onClick={this.props.deleteB}>X</button>
            </div>
        )
    }
}

export default newFact;