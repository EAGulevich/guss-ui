import type { CSSProperties, FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Flex, Layout, Typography } from "antd";

import { Header } from "../components/Header.tsx";

const layoutStyles: CSSProperties = {
  height: "100vh",
  maxHeight: "100vh",
};

const contentStyles: CSSProperties = {
  overflow: "auto",
  //   TODO
  height: "calc(100vh - 64px - 70px)",
};

export const LayoutForPages: FC<PropsWithChildren> = ({ children }) => {
  //   TODO: реализовать редирект на страницу логина, если не авторизован
  // TODO: логотип + иконка приложения
  return (
    <Layout style={layoutStyles}>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={contentStyles}>{children}</Layout.Content>
      <Layout.Footer>
        Тестовое задание от кандидата Екатерины Гулевич. Telegram:
        <Typography.Text code copyable>
          @meteorgul
        </Typography.Text>
        <Flex justify={"space-between"}>
          <Link to="/">Login</Link>
          <Link to="/rounds/456">round 456</Link>
          <Link to="/rounds">rounds</Link>
          <Link to="/sdaf">not found</Link>
        </Flex>
      </Layout.Footer>
    </Layout>
  );
};
