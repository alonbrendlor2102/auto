import React, { Component } from 'react';
import './App.css';
import Votes from "./components/Votes";
import DataTemplate from "./components/DataTemplate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Votes 
          votesCount="22.0k"
          onIncreaseVotes
          onDecreaseVotes
        />
        <DataTemplate
          text="Full moon rising over Mount Hood"
          link="/autoddit/1"
          submissionDate="May 22, 2018 08:43"
          username="reactfan"
        >
          <div>311 Comments</div>
        </DataTemplate>
      </div>
    );
  }
}

export default App;
