import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid justify-content-center mt-4 w-25">
      <h4 className="text-warning mb-3 text-center">Sign Up</h4>
      <form>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" class="btn btn-success px-3 py-2">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
