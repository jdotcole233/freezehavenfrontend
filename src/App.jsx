import { useState } from "react";
import { SideBar, TopBar } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { navigationItems } from "./assets/data";
import { ViewProduct } from "./components/Products";
import { ViewEmployee } from "./components/Employees";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [collapse, setCollapse] = useState(false)

  return (
    <div className="flex flex-col h-auto">
      <TopBar setUpCollapse={setCollapse} />

      <main className="flex  mt-16">
        <div className={`fixed bg-white h-full ${ collapse ? ' w-64' : ''}`}>
          <SideBar  collapse={collapse} />
        </div>
        <section className={`${ collapse ? ' ml-64' : 'ml-20'} flex-1`}>
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
          <ToastContainer position="bottom-right" />
        </section>
      </main>
    </div>
  );
}

export default App;
