import React, { Component } from 'react';
import Todos from './components/Todos'
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
        completed : true
      },
      {
        id : 3,
        title : 'Meeting with Boss',
        completed : false
      }
    ]
  }

  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
          {/* <h1>APP</h1> */}
          <Todos todos = {this.state.todos} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//         {/* <h1>APP</h1> */}
//         <Todos />
//     </div>
//   );
// }

export default App;
