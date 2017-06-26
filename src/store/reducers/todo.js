const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // TODO: add implementation
      return state;
    default:
      return state;
  }
};

export default todoReducer
