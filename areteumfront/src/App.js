import { BrowserRouter, Route, Routes } from "react-router-dom";
/*import { useState, useEffect } from "react";*/
import GlobalStyle from "./pages/GlobalStyles";
import Keyword from "./pages/Keyword";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/keyword" element={<Keyword />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
