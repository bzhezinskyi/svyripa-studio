import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
