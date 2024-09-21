import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Talk from "./pages/Talk";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/talk" element={<Talk />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
