import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./store";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Grid from "./components/Grid/index.tsx";
import Pagination from "./routes/Pagination.tsx";
import EditForm from "./components/EditForm/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pagination",
    element: <Pagination />,
  },
  {
    path: "/edit/:id",
    element: <EditForm />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
