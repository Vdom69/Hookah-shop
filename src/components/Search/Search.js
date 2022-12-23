import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import dats from "../../data/dats.js";

function Search() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    getUsers(dats);
  }, []);

  //Simulating making api call with useEffect
  const getUsers = dats => {
    setUsers(dats);
  };

  const bySearch = (user, search) => {
    if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const filteredList = (users,search) => {
    return users
      .filter(user => bySearch(user, search));
  };

  return (
    <div className="App">
      <input
        type="search"
        placeholder="search..."
        onChange={e => setSearch(e.target.value)}
      />
      {filteredList(users, search).map(user => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default Search;
