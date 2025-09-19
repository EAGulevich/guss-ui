import { Flex, Statistic, Typography } from "antd";

const { Timer } = Statistic;

export const Cooldown = ({ startDate }: { startDate: string }) => {
  return (
    <Flex vertical align={"center"}>
      <Typography.Text>Cooldown </Typography.Text>
      <Typography.Text>До начала раунда: </Typography.Text>
      <Timer type="countdown" value={new Date(startDate).getTime()} />
    </Flex>
  );
};
