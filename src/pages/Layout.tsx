import type { CSSProperties, FC, PropsWithChildren } from "react";
import { Layout, Typography } from "antd";

import { Header } from "../components/Header.tsx";

const layoutStyles: CSSProperties = {
  height: "100vh",
  maxHeight: "100vh",
};

export const LayoutForPages: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout style={layoutStyles}>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer>
        Тестовое задание от кандидата Екатерины Гулевич{" "}
        <Typography.Text code copyable>
          @meteorgul
        </Typography.Text>
      </Layout.Footer>
    </Layout>
  );
};
