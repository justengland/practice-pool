import React, { Component } from 'react';
import TodoApp from 'components/TodoApp';

const styles = require('style/useable!css!todomvc-app-css/index.css');
export default class TodosPageTwo extends Component {

  componentWillMount() {
    styles.use();
  }

  componentWillUnmount() {
    styles.unuse();
  }

  render() {
    return (
      <div>
        <TodoApp />
      </div>
    );
  }
}
