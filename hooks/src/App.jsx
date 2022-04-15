import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { TodoCreate } from './components/TodoCreate';
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
function App() {
  const isAuthenticated = true;

  return (
    <div className="App">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/todo-create">CreateTodo</Link>
      </div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }></Route>
        <Route
          path="/todo-create"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <TodoCreate />
            </PrivateRoute>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;

        
        