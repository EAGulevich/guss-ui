import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, List, Row } from "antd";

import { ROUTES } from "../../routes.ts";
import { useUserStore } from "../../store.ts";
import { CardWrapper, RoundItem, RoundsListPageWrapper } from "./styles.tsx";

interface Round {
  id: string;
  startDate: string;
  endDate: string;
}

const RoundListPage = () => {
  const [rounds, setRounds] = useState<Round[]>([]);
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRounds = async () => {
      // TODO: запрос до раундов
      const response: Round[] = [
        {
          id: "8c3eed83-8a8a-41a0-8f91-9ad501e8f8a1",
          startDate: "18.05.2025, 06:28:17",
          endDate: "18.05.2025, 06:29:17",
        },
        {
          id: "8c3eed83-8a8a-41a0-8f91-9ad501e8f100",
          startDate: "18.05.2025, 03:28:17",
          endDate: "18.05.2025, 04:29:17",
        },
      ];
      setRounds(response);
    };
    fetchRounds();
  }, []);

  const createRound = async () => {
    // TODO: запрос на новый раунд
    const response: Round = {
      id: "8c3eed83-8a8a-41a0-8f91-9ad501e8f8a2",
      startDate: "18.05.2025, 07:28:17",
      endDate: "18.05.2025, 08:29:17",
    };
    navigate(`${ROUTES.ROUND.to({ id: response.id })}`);
  };

  const goToRound = (roundId: string) =>
    navigate(`${ROUTES.ROUND.to({ id: roundId })}`);

  return (
    <RoundsListPageWrapper>
      {user?.role === "admin" && (
        <Row key="createRound">
          <Col span={24}>
            <Button onClick={createRound}>Создать раунд</Button>
          </Col>
        </Row>
      )}
      <Row key="roundsList">
        <Col span={24}>
          <List>
            {rounds.map((round) => (
              <RoundItem
                key={round.id}
                onClick={goToRound.bind(null, round.id)}
              >
                <CardWrapper>
                  {/*TODO: возможность скопировать ссылку, чтобы пригласить в игру*/}
                  <div>[Индикатор] Round ID: {round.id}</div>
                  <div>
                    {/* TODO {new Date(round.startDate).toLocaleString()}) */}
                    Start: {round.startDate}
                  </div>
                  <div>
                    {/* TODO {new Date(round.startDate).toLocaleString()}) */}
                    End: {round.endDate}
                  </div>
                </CardWrapper>
              </RoundItem>
            ))}
          </List>
        </Col>
      </Row>
    </RoundsListPageWrapper>
  );
};

export default RoundListPage;
