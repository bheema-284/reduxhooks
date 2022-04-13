import { useSelector } from 'react-redux';
import { Profile } from './Profile';

export const Home = () => {
  const { username, token } = useSelector((state) => state.login);
  return (
    <div>
      <h1>Home</h1>
      <Profile token={token} username={username} />
    </div>
  );
};
