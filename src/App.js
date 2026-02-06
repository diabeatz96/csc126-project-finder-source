import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import ApiRef from "./pages/ApiRef";
import Setup from "./pages/Setup";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results/:type" element={<Results />} />
          <Route path="/api" element={<ApiRef />} />
          <Route path="/setup" element={<Setup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
