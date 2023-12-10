import { useState } from "react";
import { SideBar, TopBar } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { navigationItems } from "./assets/data";
import { ViewProduct } from "./components/Products";
import { ViewEmployee } from "./components/Employees";

function App() {
  const [collapse, setCollapse] = useState(false)

  return (
    <div className="flex flex-col h-auto">
      <TopBar setUpCollapse={setCollapse} />

      <main className="flex  mt-16">
        <div className={`${ collapse ? 'w-1/4' : ''}`}>
          <SideBar  collapse={collapse} />
        </div>
        <section className=" flex-1">
          <Routes>
            {navigationItems.map((navigationItem, key) => (
              <Route
                key={key}
                path={navigationItem.path}
                element={navigationItem.component}
              />
            ))}
            <Route path="/products/:id" element={<ViewProduct />} />
            <Route path="/employees/:id" element={<ViewEmployee />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
