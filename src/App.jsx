import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { Navigate } from "react-router-dom";
//components
import Hero from "./components/Hero";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import SearchedItem from "./components/SearchedItem";
import DetailsPage from "./components/DetailsPage";
import Store from "./components/Store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#313f7f",
    },
  },
});

function App() {
  return (
    <div
      style={{
        background: "#c1c1c1",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes>
            <Route path="/store" element={<Store />}/>
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/searched/:search" element={<SearchedItem />} />
            <Route path="products/:id" element={<DetailsPage />}/>
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Hero />} />
            <Route path="/*" element={<Navigate to="/notfound" />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
