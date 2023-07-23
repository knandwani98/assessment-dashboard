import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import { Route, Routes } from "react-router-dom";
import ScreenContext from "./context/ScreenContext";
import NotFound from "./components/NotFound";

const App = () => {
  const screenSize = useRef(window.screen.width);

  const [screenType, setScreenType] = useState(() => {
    return screenSize <= 768 ? "mobile" : "laptop";
  });

  return (
    <ScreenContext.Provider value={screenType}>
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
