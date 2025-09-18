import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider, theme, type ThemeConfig } from "antd";

import { LayoutForPages } from "./pages/Layout.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import RoundPage from "./pages/RoundPage.tsx";
import RoundListPage from "./pages/RoundsListPage/RoundsListPage.tsx";
import { ROUTES } from "./routes.ts";

const themeConfig: ThemeConfig = { algorithm: theme.darkAlgorithm };

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <LayoutForPages>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.LOGIN.path} element={<LoginPage />} />
            <Route path={ROUTES.ROUNDS.path} element={<RoundListPage />} />
            <Route path={ROUTES.ROUND.path} element={<RoundPage />} />
            <Route path={ROUTES.NOT_FOUND.path} element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </LayoutForPages>
    </ConfigProvider>
  );
}

export default App;
