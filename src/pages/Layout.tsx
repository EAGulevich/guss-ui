import type { CSSProperties, FC, PropsWithChildren } from "react";
import { Flex, Layout, Typography } from "antd";

import { Header } from "../components/Header.tsx";

const layoutStyles: CSSProperties = {
  height: "100vh",
  maxHeight: "100vh",
};

const contentStyles: CSSProperties = {
  overflow: "auto",
  //   TODO
  height: "calc(100vh - 64px - 92px)",
};

export const LayoutForPages: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout style={layoutStyles}>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={contentStyles}>{children}</Layout.Content>
      <Layout.Footer>
        <Flex align={"center"} vertical>
          <Typography.Text>От кандидата: Екатерины Гулевич</Typography.Text>
          <Typography.Text>
            Telegram:
            <Typography.Text code copyable>
              @meteorgul
            </Typography.Text>
          </Typography.Text>
        </Flex>
      </Layout.Footer>
    </Layout>
  );
};
