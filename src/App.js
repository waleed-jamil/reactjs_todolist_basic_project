import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddItem from './components/AddItem'
import About from './components/pages/About'
import './App.css';
import {v4 as uuid} from 'uuid';

class App extends Component {

  state = {
    todos : [
      {
        id : uuid(),
        title : 'Take Out the trash',
        completed : false
      },
      {
        id : uuid(),
        title : 'Dinner with wife',
        completed : false
      },
      {
        id : uuid(),
        title : 'Meeting with Boss',
        completed : false
      }
    ]
  }

  // Toggle Complete
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  })
}

//Delete Todo Item
delItem = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => 
    todo.id !== id)]})
}

//Add Todo Item
addItemToList = (title) => {
  const newTodoItem = {
    id: uuid(),
    title: title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodoItem] });
}

  render() {
  
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>

            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddItem addItemToList={this.addItemToList}/>
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}
                delItem={this.delItem}/>
              </React.Fragment>
            )}/>

            <Route path="/about" component={About}/>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
