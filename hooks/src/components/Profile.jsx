import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
export const Profile = ({ username, token }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`https:masai-api-mocker.herokuapp.com/user/${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Brear${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setProfile(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h3>Profile Details</h3>;<p></p>
      <p>Name:{profile.name}</p>
      <p>Email:{profile.email}</p>
      <p>Mobile:{profile.mobile}</p>
      <p>UnserName:{profile.username}</p>
      <p>Description:{profile.description}</p>
    </div>
  );
};
