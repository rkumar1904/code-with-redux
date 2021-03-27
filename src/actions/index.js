export const increment = (value) => {
  return {
    type: 'INCREMENT',
    payload: value
  };
}

export const decrement = (abc) => {
  return {
    type: 'DECREMENT',
    payload: abc,
  };
}