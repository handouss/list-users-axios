import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [listOfUser, setListOfUser ] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUser(res?.data))
      .catch((err) => console.log(err));
  }, []);

  return listOfUser?.length ? (
    <>
      <ul>
        {listOfUser?.map((user) => (
          <li>{user?.name}</li>
        ))}
      </ul>
    </>
  ) : (
    <><img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' /></>
  );
}

export default App;
