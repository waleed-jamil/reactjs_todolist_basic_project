import React, { Component } from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import './App.css';

class App extends Component {

  state = {
    todos : [
      {
        id : 1,
        title : 'Take Out the trash',
        completed : false
      },
      {
        id : 2,
        title : 'Dinner with wife',
        completed : false
      },
      {
        id : 3,
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

  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
          <Header/>
          <Todos todos = {this.state.todos} toggleComplete={this.toggleComplete}
                  delItem={this.delItem}/>
      </div>
    );
  }
}

export default App;
