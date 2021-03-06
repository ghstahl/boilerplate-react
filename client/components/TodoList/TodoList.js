import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import Todo from '../Todo';

export default function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {R.reverse(todos).map(todo => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
