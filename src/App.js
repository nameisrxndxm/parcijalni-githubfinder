import React, { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [user, setUser] = useState(null);

  const searchGithubUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        const repositoriesResponse = await fetch(data.repos_url);
        if (repositoriesResponse.ok) {
          const repositoriesData = await repositoriesResponse.json();
          data.repositories = repositoriesData;
        }
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      console.log(response);
      setUser(null);
    }
  };

  const resetState = () => {
    setUser(null);
  };

  return (
    <div className="container">
      <h1>Github Pretraživač</h1>
      {user ? (
        <div>
          <UserProfile user={user} />
          <button onClick={resetState}>Reset</button>
        </div>
      ) : (
        <SearchForm onSearch={searchGithubUser} />
      )}
    </div>
  );
};

export default App;
