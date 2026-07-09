import HomePage from "./pages/HomePage";
import {BrowserRouter, Routes, Route} from "react-router"
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";

export default function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
