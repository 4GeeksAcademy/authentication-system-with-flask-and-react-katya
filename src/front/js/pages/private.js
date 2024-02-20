import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Private = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid justify-content-center mt-4 w-25">
      <h4 className="text-info my-4 text-center">Personal Information</h4>
      <ul className="list-group">
        <li className="p-3 list-group-item list-group-item-action list-group-item-light d-flex flex-row">
          <strong className="text-info text-opacity-75 me-1">Email:</strong>
          email@example.com
          <div className="d-flex w-100 justify-content-end">
            <i className="fa-solid fa-pencil text-info text-opacity-50"></i>
          </div>
        </li>
        <li className="p-3 list-group-item list-group-item-action list-group-item-light d-flex flex-row">
          <strong className="text-info text-opacity-75 me-1">Password:</strong>
          *******
          <div className="d-flex w-100 justify-content-end">
            <i className="fa-solid fa-pencil text-info text-opacity-50"></i>
          </div>
        </li>
        <li className="p-3 list-group-item list-group-item-action list-group-item-light">
          <strong className="text-info text-opacity-75">Active since:</strong>{" "}
          19.02.2024
        </li>
      </ul>
    </div>
  );
};
