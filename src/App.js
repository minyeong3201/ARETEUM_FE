import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Talk from "./pages/Talk";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/talk" element={<Talk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
