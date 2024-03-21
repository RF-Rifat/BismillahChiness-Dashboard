import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

import { Toaster } from "react-hot-toast";
import { MaterialTailwindControllerProvider } from "./Context/index.jsx";
import UserProvider from "./Authentication/AuthProvider.jsx";
import AdminProvider from "./Context/AdminProvider.jsx";

import { Provider } from "react-redux";
import store from "./redux/store.js";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MaterialTailwindControllerProvider>
          <Toaster />
          <UserProvider>
            <AdminProvider>
              <RouterProvider router={router} />
            </AdminProvider>
          </UserProvider>
        </MaterialTailwindControllerProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
