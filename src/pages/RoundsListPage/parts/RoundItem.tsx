import { useNavigate } from "react-router-dom";
import { Badge, Col, Divider, Row, Typography } from "antd";

import { ROUTES } from "../../../routes.ts";
import { CardWrapper, RoundItemWrapper } from "./styles.tsx";

interface Round {
  id: string;
  startDate: string;
  endDate: string;
}

export const RoundItem = ({ round }: { round: Round }) => {
  const navigate = useNavigate();

  const goToRound = (roundId: string) =>
    navigate(`${ROUTES.ROUND.to({ id: roundId })}`);

  const now = new Date();
  const status =
    now < new Date(round.startDate)
      ? "pending"
      : now > new Date(round.endDate)
        ? "finished"
        : "active";

  const color =
    status === "active" ? "green" : status === "pending" ? "lightblue" : "gray";
  const statusName =
    status === "active"
      ? "Активен"
      : status === "pending"
        ? "Cooldown"
        : "Завершен";

  return (
    <RoundItemWrapper onClick={goToRound.bind(null, round.id)}>
      <CardWrapper>
        <Row>
          <Col>
            <Badge color={color} text="Round ID:" /> {round.id}
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={6}>
            <Typography.Text>Start:</Typography.Text>
          </Col>
          <Col>
            <Typography.Text>
              {new Date(round.startDate).toLocaleString()}
            </Typography.Text>
          </Col>
        </Row>

        <Row>
          <Col span={6}>
            <Typography.Text>End:</Typography.Text>
          </Col>
          <Col>
            <Typography.Text>
              {new Date(round.endDate).toLocaleString()}
            </Typography.Text>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={6}>
            <Typography.Text>Статус:</Typography.Text>
          </Col>
          <Col>
            <Typography.Text>{statusName}</Typography.Text>
          </Col>
        </Row>
      </CardWrapper>
    </RoundItemWrapper>
  );
};
