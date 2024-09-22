import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Talk from "./pages/Talk";
import TimeTable from "./pages/TimeTable";
import BoothLayout from "./pages/BoothLayout";
import Main from "./pages/Main";
import GeneralBooth from "./pages/GeneralBooth";
import FoodBooth from "./pages/FoodBooth";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/talk" element={<Talk />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/boothlayout" element={<BoothLayout />} />
        <Route path="/main" element={<Main />} />
        <Route path="/generalbooth" element={<GeneralBooth />} />
        <Route path="/foodbooth" element={<FoodBooth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
