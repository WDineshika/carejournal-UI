import { Route, BrowserRouter as Router, Routes } from "react-router";

import Home from "./components/Home";

import About from "./components/About";
import JournalForm from "./components/JournalForm";

import "./App.css";
import Navbar from "./components/Navbar";
import ViewEntries from "./components/ViewEntries";


function App() {

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add-entry"
          element={<JournalForm />}
        />

        <Route
          path="/about"
          element={<About />}
        />
        <Route path="/entries" element={<ViewEntries />} />
     
      </Routes>

    </Router>

  );
}

export default App;