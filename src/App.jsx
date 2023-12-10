import { useState } from "react";
import { SideBar, TopBar } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { navigationItems } from "./assets/data";

function App() {
  return (
    <div className="flex w-screen h-screen">
      {/* <div className="w-80"> */}
      <div className="w-1/4">
        <SideBar />
      </div>
      <main className="flex-1 w-screen">
        <TopBar />
        <Routes>
          {navigationItems.map((navigationItem, key) => (
            <Route
              key={key}
              path={navigationItem.path}
              element={navigationItem.component}
            />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
