import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import RepositoryDetails from "./components/RepositoryDetails";
import ErrorPage from "./components/ErrorPage";
import AppOutlet from "./components/AppOutlet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} errorElement={<ErrorPage />} />
      <Route path='/repositorydetails' element={<AppOutlet />}>
        <Route path=':id' element={<RepositoryDetails />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
