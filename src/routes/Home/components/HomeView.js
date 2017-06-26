import React from 'react'
import { connect } from 'react-redux'

import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Todo app</h4>
    <input type='text' />
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(HomeView)
