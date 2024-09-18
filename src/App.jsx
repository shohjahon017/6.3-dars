import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUser] = useState([]);

  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeSurname(event) {
    setSurname(event.target.value);
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleSave(event) {
    event.preventDefault();

    if (!surname || !name || !email) {
      alert("Barcha qismlarni to`ldirirng");
      return;
    }
    if (password.length < 8) {
      alert("Parol kamida 8 ta belgidan iborat bo`lishi kerak");
      return;
    }

    const userForm = {
      name: name,
      surname: surname,
      password: password,
      email: email,
      id: Date.now(),
    };

    let copied = [...users];
    copied.push(userForm);
    setUser(copied);

    setName("");
    setSurname("");
    setPassword("");
    setEmail("");
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSave}>
        <input
          onChange={handleChangeName}
          value={name}
          type="text"
          name=""
          id=""
          placeholder="Enter name..."
        />
        <input
          onChange={handleChangeSurname}
          value={surname}
          type="text"
          placeholder="Enter surname..."
        />
        <input
          onChange={handleChangeEmail}
          value={email}
          type="email"
          placeholder="Enter email..."
        />
        <input
          onChange={handleChangePassword}
          value={password}
          type="password"
          placeholder="Enter password..."
        />
        <button onClick={handleSave}>Save</button>
      </form>

      <div className="user__cards">
        {users.map((value) => (
          <div key={value.id} className="card">
            <h3>
              {value.name} {value.surname}
            </h3>
            <p>{value.email}</p>
            <p>Password: {value.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
