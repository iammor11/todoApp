import React, { Component } from 'react';
import Todos from './components/todos';
import Addtodo from './components/addtodo';

class App extends Component {
  state = {
    todos : [
      {id : 1 , content : "Good Morning"},
      {id : 2 , content : "Turn off your alarm"}
    ]
  }
  deleteTodo = (id) =>{
    const dTodos = this.state.todos.filter(todo =>{
      return todo.id !== id;
    }
    );
    this.setState({
      todos : dTodos
    })
  }

  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos , todo]
    this.setState({
      todos
    }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Todo's App</h1>
        <br />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Addtodo addtodo={this.addtodo}/>
      </div>
    );
  }
}

export default App;