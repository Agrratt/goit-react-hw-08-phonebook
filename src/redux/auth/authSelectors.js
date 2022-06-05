const getIsLogged = state => state.auth.isLogged;

const getUserName = state => state.auth.user.name;

const getIsRefreshing = state => state.auth.isRefreshing;

export const authSelectors = {
  getIsLogged,
  getUserName,
  getIsRefreshing,
};

// export default authSelectors;
