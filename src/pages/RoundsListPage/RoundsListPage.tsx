import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, List, message, Row } from "antd";

import { api } from "../../api/api.ts";
import { ROUTES } from "../../routes.ts";
import { useUserStore } from "../../store.ts";
import { RoundItem } from "./parts/RoundItem.tsx";
import { RoundsListPageWrapper } from "./styles.tsx";

interface Round {
  id: string;
  startDate: string;
  endDate: string;
}

const RoundListPage = () => {
  const [messageApi, contextHolder] = message.useMessage({ maxCount: 3 });
  const [rounds, setRounds] = useState<Round[]>([]);
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRounds = async () => {
      const response = await api.get<Round[]>("/rounds");

      setRounds(response.data);
    };
    fetchRounds();
  }, []);

  const createRound = async () => {
    try {
      const response = await api.post<{ round: Round }>("/rounds");
      navigate(`${ROUTES.ROUND.to({ id: response.data.round.id })}`);
    } catch (err) {
      messageApi.open({
        type: "error",
        content:
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          err?.response?.data?.error === "FORBIDDEN"
            ? "Гусь тебе не доверяет"
            : "Что-то не так... Попробуйте перезагрузить страницу",
        duration: 5,
      });
    }
  };

  return (
    <RoundsListPageWrapper>
      {contextHolder}
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
              <RoundItem key={round.id} round={round} />
            ))}
          </List>
        </Col>
      </Row>
    </RoundsListPageWrapper>
  );
};

export default RoundListPage;
