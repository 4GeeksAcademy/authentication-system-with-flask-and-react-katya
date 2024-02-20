import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-fluid justify-content-center mt-4 w-25">
      <h4 className="text-warning mb-3 text-center">Sign Up</h4>
      <form>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              actions.signup(email, password);
              navigate("/login");
            }}
            type="submit"
            className="btn btn-success px-3 py-2"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
