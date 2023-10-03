import React, { useState, useCallback } from "react";

function SearchForm({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const inputValue = username.trim();

      if (!inputValue) {
        alert("Unesi ime");
        return;
      }

      onSearch(inputValue);
    },
    [username, onSearch]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          type="text"
          placeholder="Unesi ime"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Pretraži</button>
      </form>
    </div>
  );
}

export default SearchForm;
