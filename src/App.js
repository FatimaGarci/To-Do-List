import React from 'react';
//import logo from './logo.svg';
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
            <img src="https://images.vexels.com/media/users/3/158239/isolated/preview/305ba6b895c4c7f2ff79878d849d0795-smile-emoticon-face-by-vexels.png" />
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
          <List items={this.state.items}/>
        </div>
      </div>
    );
  }
}

// export default App;
