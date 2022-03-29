import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { actionCreators } from "../../redux";

import "./styles.scss";

export function Signup() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const { username } = bindActionCreators(actionCreators, dispatch);

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
              onClick={() => username(name)}
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
