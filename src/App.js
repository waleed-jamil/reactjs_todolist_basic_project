import React, { Component } from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddItem from './components/AddItem'
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
    //console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddItem addItemToList={this.addItemToList}/>
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}
                 delItem={this.delItem}/>
        </div>
      </div>
    );
  }
}

export default App;
