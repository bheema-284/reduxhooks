import { useState } from 'react';

export const Login = () => {
  const [login, setLogin] = useState([]);
  const handleLogin = () => {
    payload = {
      username,
      password,
    };
  };
  return (
    <div>
      <h1>Login</h1>
      <input type="text" name="" placeholder="Enter Username" />
      <br />
      <input type="text" name="" placeholder="Enter Password" />
      <br />
      <button>login</button>
    </div>
  );
};
