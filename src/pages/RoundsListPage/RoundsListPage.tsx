import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, List, Row } from "antd";
import axios from "axios";

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
      const response = await axios.get<Round[]>(
        "http://localhost:3000/rounds",
        { withCredentials: true },
      );

      setRounds(response.data);
    };
    fetchRounds();
  }, []);

  const createRound = async () => {
    try {
      const response = await axios.post<{ round: Round }>(
        "http://localhost:3000/rounds",
        {
          /* данные для создания раунда */
        },
        { withCredentials: true },
      );

      navigate(`${ROUTES.ROUND.to({ id: response.data.round.id })}`);
    } catch (error) {
      //   todo
      console.log(error);
    }
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
                  {/*TODO: пересчитывать значение с течением времени*/}
                  <div>Статус: Cooldown Активен Завершен</div>
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
