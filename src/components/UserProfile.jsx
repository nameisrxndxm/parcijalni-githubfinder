import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Location: {user.location}</p>
      <h3>Repositories:</h3>
      <ul>
        {user.repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
