import React, { Component } from 'react';
import './App.css';
import NewFact from './newFact';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            facts : [],
            savedFacts : []
        };
        this.deleteB = this.deleteB.bind(this);
    }

    componentDidMount() {
        var savedFacts = localStorage.getItem('savedFacts');
        if (savedFacts) {
            this.setState({ savedFacts: JSON.parse(savedFacts) });
        }
      }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.savedFacts !== this.state.savedFacts) {
          localStorage.setItem('savedFacts', JSON.stringify(this.state.savedFacts));
        }
      }
    
    getCatFact = () => {
        fetch('https://meowfacts.herokuapp.com/?count=1')
          .then(response => response.json())
          .then(data => {
            this.setState({ facts: [...this.state.facts, data['data'][0]] }); 
          })
          .catch(error => {
            console.error(error);
          });
    };

    deleteB = event =>{
        var isSaved = event.target.saved;
        /*console.log(event.target.saved);*/
        var index = event.target.id;
        if (isSaved) {
            console.log("check1");
            var updatedSavedFacts = [...this.state.savedFacts];
            updatedSavedFacts.splice(index, 1);
            this.setState({ savedFacts: updatedSavedFacts });
        } else {
            console.log("check2");
            var updatedFacts = [...this.state.facts];
            updatedFacts.splice(index, 1);
            this.setState({ facts: updatedFacts });
        }
      };

    saveFact = event => {

        var index = event.target.id;
        var updatedFacts = [...this.state.facts];
        var savedFact = updatedFacts[index];
        updatedFacts.splice(index, 1);
        this.setState({ facts: updatedFacts });
        this.setState({ savedFacts: [...this.state.savedFacts, savedFact] });
        localStorage.setItem('savedFacts', JSON.stringify(this.state.savedFacts));
        
    };

    render() {
        return (
            <div className="mainSection">
                <div className="button-area">
                    <h1>Random Cat Facts</h1>
                    <button className="generate-fact-button" onClick={this.getCatFact}>Generate a Random Cat Fact</button>
                </div>
                <div className="facts">
                    <div className="saved-facts">
                    {this.state.savedFacts && this.state.savedFacts.map((fact, index) => 
                        <NewFact key={index} id={index} text={fact} deleteB={this.deleteB} saveFact={this.saveFact}  saved={true} />
                    )}
                    </div>
                    <div className="new-facts">
                        {this.state.facts && this.state.facts.map((fact, index) => 
                        /*<NewFact key={index} id={index} text={fact} deleteB={this.deleteB} saveFact={this.saveFact}  saved={false} />
                    )}*/
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
