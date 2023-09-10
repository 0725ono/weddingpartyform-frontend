import "./App.css";
import Background from "./components/Background";

import Contact from "./components/Contact";
import Footer from "./pages/Footer";
import PageTop from "./pages/PageTop";

import { createContext, useState } from "react";

export const Context = createContext();

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    attendance: "",
    name: "",
    postalcode: "",
    address: "",
    email: "",
    tel: "",
    allergy: "",
    country: "",
    drivingMusic: "",
    tobeinto: "",
    thingstowant: "",
  });
  return (
    <div className="App">
      <Context.Provider
        value={{ showConfirmation, setShowConfirmation, formData, setFormData }}
      >
        {!showConfirmation ? (
          <>
            <Background />
            <PageTop />
            <Contact />
            <Footer />
          </>
        ) : (
          <>
            <Background />
            <Contact />
            <Footer />
          </>
        )}
      </Context.Provider>
    </div>
  );
}

export default App;
