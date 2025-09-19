import type { CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { Avatar, Flex, Popover, Typography } from "antd";

import { useUserStore } from "../store.ts";
import { getTabName } from "./getTabName.helper.ts";

const headerContentStyles: CSSProperties = {
  height: "100%",
};

const tabNameStyle: CSSProperties = {
  margin: "0 auto",
};

export const Header = () => {
  const { pathname } = useLocation();
  const user = useUserStore((state) => state.user);

  const tabName = getTabName(pathname);
  const userName = user?.username;
  return (
    <Flex justify={"end"} align={"center"} style={headerContentStyles}>
      <Typography.Text style={tabNameStyle}>{tabName}</Typography.Text>

      {userName && (
        <Popover
          placement={"bottomLeft"}
          content={`Моя роль в этом мире - ${user?.role}`}
          title={`Я не гусь, я ${userName.toUpperCase()}`}
        >
          <Avatar>{userName[0].toUpperCase()}</Avatar>
        </Popover>
      )}
    </Flex>
  );
};
