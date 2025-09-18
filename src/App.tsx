import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import RoundPage from "./pages/RoundPage.tsx";
import RoundListPage from "./pages/RoundsListPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*TODO: вынести пути*/}
        <Route path="/" element={<LoginPage />} />
        <Route path="/rounds" element={<RoundListPage />} />
        <Route path="/round/:id" element={<RoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
