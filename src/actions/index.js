export const LOGIN = 'LOGIN';

export const login = (username, password) => {
  console.log("login action")
  return {
    type: LOGIN,
    payload: {
      username,
      password
    }
  };
}
