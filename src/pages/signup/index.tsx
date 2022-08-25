import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/button";
import { Input } from "../../components/input";

import "./styles.scss";

export function Signup() {
  const [name, setName] = useState("");

  function handleSubmit(name: string) {
    localStorage.setItem("name", name);
  }

  return (
    <div className="signup-container">
      <div className="signup-content">
        <p>Welcome to CodeLeap network!</p>
        <form>
          <label id="username">Please enter your username</label>
          <Input
            id="username"
            name="username"
            placeholder="John Doe"
            className="input"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Link to="/Home">
            <Button
              className="black"
              type="submit"
              onClick={() => handleSubmit(name)}
              disabled={name ? false : true}
            >
              ENTER
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
