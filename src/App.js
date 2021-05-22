import { useEffect, useState } from "react";

import "./App.css";

import { fetchUsers } from "./apis/users";

const ListUsers = () => {
  const [uiState, setUiState] = useState("");
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUserAction = async () => {
      try {
        setUiState("IN_PROGRESS");
        const usersResponse = await fetchUsers();
        setUiState("SUCCESS");
        setUsers(usersResponse.data);
      } catch (err) {
        setUiState("ERROR");
        setErrorMessage(err.data.message);
      }
    };

    fetchUserAction();
  }, []);

  return (
    <div>
      {uiState === "IN_PROGRESS" && <div>Loading...</div>}
      {uiState === "ERROR" && <div className="error">{errorMessage}</div>}
      {uiState === "SUCCESS" && (
        <div>
          {users.length === 0 ? (
            <div>users list is empty</div>
          ) : (
            <ul>
              {users.map((user) => {
                return (
                  <li key={user.id}>
                    Name : {user.name} <br />
                    Username : {user.username} <br />
                    Email : {user.email} <br />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ListUsers />
    </div>
  );
}

export default App;
