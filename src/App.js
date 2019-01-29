import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers';
import './App.css';

import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';

const initinitialState = {
  todos: [
    {
      text: 'first',
      completed: false
    }
  ]
}

let store = createStore(todoApp, initinitialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
