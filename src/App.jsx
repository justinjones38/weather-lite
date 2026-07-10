import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";
import DashboardDetail from "./pages/DashboardDetail";
import DashboardAuthenticator from "./pages/DashboardAuthenticator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<DashboardAuthenticator />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/:id" element={<DashboardDetail />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
