import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Talk from "./pages/Talk";
import TimeTable from "./pages/TimeTable";
import BoothLayout from "./pages/BoothLayout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/talk" element={<Talk />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/boothlayout" element={<BoothLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
