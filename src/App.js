import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Talk from "./pages/Talk";
import Introduce_ARETEUM from "./pages/Introduce_ARETEUM";
import Introduce_Management from "./pages/Introduce_Management";
import Introduce_Lion from "./pages/Introduce_Lion";
import TimeTable from "./pages/TimeTable";
import BoothLayout from "./pages/BoothLayout";
import Main from "./pages/Main";
import GeneralBooth from "./pages/GeneralBooth";
import FoodBooth from "./pages/FoodBooth";
import Keyword from "./pages/Keyword";
import Search from "./pages/Search";

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
        <Route path="/keyword" element={<Keyword />} />
        <Route path="/search" element={<Search />} />
        <Route path="/introduce_lion" element={<Introduce_Lion />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/boothlayout" element={<BoothLayout />} />
        <Route path="/" element={<Main />} />
        <Route path="/generalbooth" element={<GeneralBooth />} />
        <Route path="/foodbooth" element={<FoodBooth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
