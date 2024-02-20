import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid justify-content-center mt-5 w-50">
      <div className="accordion" id="accordionPanelsStayOpen">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Sign Up
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              You can pick your email, a password and complete registration;
              your user will be created in the database, then you will be
              redirected to the login page afterwards. Follow{" "}
              <a href="https://special-journey-5gq9ppq7vxgw3vg9v-3000.app.github.dev/signup">
                {" "}
                this link
              </a>{" "}
              to sign up.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Login
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              After you fill out your email and password, you will be redirected
              to the private dashboard after a successful authentication. If you
              already have a user, follow <a href="https://special-journey-5gq9ppq7vxgw3vg9v-3000.app.github.dev/login">this link</a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Logout
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              At any moment you can press "logout" in the navbar to finish the session, then you will
              get redirected back to the login path.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
