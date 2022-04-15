import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../Redux/Login/action';
export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const handleLogin = () => {
    const payload = {
      username,
      password,
    };
    dispatch(login(payload));
  };
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name=""
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Enter Username"
      />
      <br />
      <input
        type="text"
        name=""
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter Password"
      />
      <br />
      <button onClick={handleLogin}>login</button>
    </div>
  );
};
