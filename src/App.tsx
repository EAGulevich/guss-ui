import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import RoundPage from "./pages/RoundPage.tsx";
import RoundListPage from "./pages/RoundsListPage.tsx";
import { ROUTES } from "./routes.ts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN.path} element={<LoginPage />} />
        <Route path={ROUTES.ROUNDS.path} element={<RoundListPage />} />
        <Route path={ROUTES.ROUND.path} element={<RoundPage />} />
        <Route path={ROUTES.NOT_FOUND.path} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
