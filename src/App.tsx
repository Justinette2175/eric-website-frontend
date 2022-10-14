import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { ReactQueryDevtools } from "react-query/devtools";

import { QueryClient, QueryClientProvider } from "react-query";

import Router from "./Router";
import { Layout } from "./Components/Layout";
import { CloudinaryContextProvider } from "./Contexts/CloudinaryContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CloudinaryContextProvider>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </CloudinaryContextProvider>
    </QueryClientProvider>
  );
}

export default App;
