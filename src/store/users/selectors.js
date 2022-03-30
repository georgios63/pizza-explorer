export const selectUser = (reduxState) => {
  console.log(reduxState);
  return reduxState.user;
};
