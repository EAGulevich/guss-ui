import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider, theme, type ThemeConfig } from "antd";

import { LayoutForPages } from "./pages/Layout.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import RoundPage from "./pages/RoundPage/RoundPage.tsx";
import RoundListPage from "./pages/RoundsListPage/RoundsListPage.tsx";
import { ROUTES } from "./routes.ts";

const themeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  components: {
    Layout: {
      headerBg: "#001529",
      footerBg: "#001529",
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <BrowserRouter>
        <LayoutForPages>
          <Routes>
            <Route path={ROUTES.LOGIN.path} element={<LoginPage />} />
            <Route path={ROUTES.ROUNDS.path} element={<RoundListPage />} />
            <Route path={ROUTES.ROUND.path} element={<RoundPage />} />
            <Route path={ROUTES.NOT_FOUND.path} element={<NotFoundPage />} />
          </Routes>
        </LayoutForPages>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
