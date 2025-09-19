import { Flex, Typography } from "antd";

export const FinishStats = ({
  myPoints,
  totalPoints,
  winner,
}: {
  totalPoints: number;
  winner: string;
  myPoints: number;
}) => {
  return (
    <Flex vertical>
      <Flex justify={"space-between"}>
        <Typography.Text>Всего</Typography.Text>
        <Typography.Text italic> {totalPoints}</Typography.Text>
      </Flex>
      <Flex justify={"space-between"}>
        <Typography.Text>Победитель</Typography.Text>
        <Typography.Text italic>{winner}</Typography.Text>
      </Flex>
      <Flex justify={"space-between"}>
        <Typography.Text>Мои очки</Typography.Text>
        <Typography.Text italic>{myPoints}</Typography.Text>
      </Flex>
    </Flex>
  );
};
