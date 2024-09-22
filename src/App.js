import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Talk from "./pages/Talk";
import Introduce_ARETEUM from "./pages/Introduce_ARETEUM";
import Introduce_Management from "./pages/Introduce_Management";
import Introduce_Lion from "./pages/Introduce_Lion";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/talk" element={<Talk />} />
        <Route path="/introduce_areteum" element={<Introduce_ARETEUM />} />
        <Route
          path="/introduce_management"
          element={<Introduce_Management />}
        />
        <Route path="/introduce_lion" element={<Introduce_Lion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
