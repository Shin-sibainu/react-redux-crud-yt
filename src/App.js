import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./features/Users";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  //useSelectorでstoreの中のstateにアクセスできる。usersはreducer名
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addUser({
        id: userList.length + 1,
        name: name,
        username: username,
      })
    );

    setName("");
    setUsername("");
  };
  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button onClick={() => handleClick()}>ユーザーを追加</button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
