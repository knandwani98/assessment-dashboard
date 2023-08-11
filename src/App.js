import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ScreenContext from "./context/ScreenContext";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ScreenContext.Provider value={{ toggleMenu, setToggleMenu }}>
      <div className="body flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContainer />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ScreenContext.Provider>
  );
};

export default App;
