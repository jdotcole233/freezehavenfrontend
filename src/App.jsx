import { useState } from "react";
import { SideBar, TopBar } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { navigationItems } from "./assets/data";

function App() {
  return (
    <div className="flex w-full">
      <SideBar />
      <main>
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
