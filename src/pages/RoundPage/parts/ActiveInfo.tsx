const { Timer } = Statistic;

import { Flex, Statistic, Typography } from "antd";

export const ActiveInfo = ({
  points,
  endDate,
}: {
  points: number;
  endDate: string;
}) => {
  return (
    <Flex vertical align={"center"}>
      <Typography.Text>Раунд активен! </Typography.Text>
      <Typography.Text>До конца осталось:</Typography.Text>
      <Timer type="countdown" value={new Date(endDate).getTime()} />
      <div>Мои очки - {points}</div>
    </Flex>
  );
};
