import React from 'react';
import './App.css';
import List from './components/list';

export default class App extends React.Component {
  //state --setState??
  //list out the items
  //onsubmit

  //bind

  constructor(props){
    super(props)
    this.state ={ //property that holds an empty string or value
      term: '',
      items: []   //array of items
    }
  }
  //onChange-> change our state/updating 
  onChange = (event) =>{
    this.setState({term: event.target.value})
  }
  onSubmit = (event) =>{
    event.preventDefault()
    this.setState({
    term: '',
    items: [...this.state.items,this.state.term]
  })
}

  render() {
    return (
      <div>
        <div className="header">
          <div className="wrapper">
            <img src="https://lh3.googleusercontent.com/proxy/AnhDr8IPJaK-zQOCiMa2ahkSthUBm6cvlY0IALzcEusfJAT7lfmO7sfG0F_nGQcAIUzIyndxrasNWWaaKeRfaBZCkDldPq5KHtju6Q" alt="happy-face"/>
            <p className="title">Do Your List For The Day!</p>
          </div>
        </div>
        <div className="app">
          <div className="app-wrapper">
              <p className="app-title">To-Do List</p>
              <form className="App" onSubmit={this.onSubmit}>
                <input value={this.state.term} onChange={this.onChange} placeholder="Type here to add a task" type="text" id="box"/>
                <br/>
              </form>
              <br />
          </div>
          <List items={this.state.items} id="list- item"/>
        </div>
      </div>
    );
  }
}

// export default App;
