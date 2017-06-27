import React from 'react'
import { connect } from 'react-redux'

import './HomeView.scss'

export const HomeView = ({ todos }) => (
  <div>
    <h4>Todo app</h4>
    <input type='text' />
    {todos.map(todo => (
      <div key={todo.id}>
        {todo.content}
      </div>
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  todos: state.todos,
})

export default connect(mapStateToProps)(HomeView)
