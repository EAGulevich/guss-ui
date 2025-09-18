import type { CSSProperties } from "react";
import { Flex, Typography } from "antd";

import { useUserStore } from "../store.ts";

const headerContentStyles: CSSProperties = {
  height: "100%",
};

export const Header = () => {
  const user = useUserStore((state) => state.user);

  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      style={headerContentStyles}
    >
      <Typography.Text> todo tabName</Typography.Text>
      <Typography.Text>
        {user?.username} - {user?.role}
      </Typography.Text>
    </Flex>
  );
};
