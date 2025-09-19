import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Flex, message } from "antd";

import { api } from "../../api/api.ts";
import { ROUTES } from "../../routes.ts";
import { ActiveInfo } from "./parts/ActiveInfo.tsx";
import { Cooldown } from "./parts/Cooldown.tsx";
import { FinishStats } from "./parts/FinishStats.tsx";
import { GUSS } from "./GUSS.ts";

interface RoundInfo {
  round: { id: string; startDate: string; endDate: string; totalPoints: 10 };
  status: "pending" | "active" | "finished";
  myPoints: number;
  winner?: string;
}

const RoundPage = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage({
    maxCount: 3,
  });
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState<RoundInfo | null>(null);
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await api.get<RoundInfo>(`/rounds/${id}`, {});
      setInfo(response.data);
      setPoints(response.data.myPoints);
    };
    fetchInfo();
    const interval = setInterval(() => {
      if (info?.status !== "finished") {
        fetchInfo();
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [id, info?.status]);

  const handleTap = async () => {
    api.post<{ myPoints: number }>(`/rounds/${id}/tap`).catch((err) => {
      messageApi.open({
        type: "error",
        key: "ROUND_NOT_ACTIVE",
        content:
          err?.response?.data?.error === "ROUND_NOT_ACTIVE"
            ? info?.status === "pending"
              ? "Гусь еще не готов"
              : "Остановись, поздно уже тапать"
            : "Что-то не так... Попробуйте перезагрузить страницу",
        duration: 5,
      });
    });
  };

  if (!info) {
    return (
      <Flex justify={"center"} style={{ margin: "40px auto" }}>
        <LoadingOutlined style={{ fontSize: 40 }} />
      </Flex>
    );
  }

  return (
    <Flex
      style={{ width: "100%", height: "100%" }}
      align={"center"}
      justify={"center"}
      vertical
    >
      {contextHolder}

      <Card
        onClick={handleTap}
        style={{ cursor: "cell" }}
        title={"Обнаружена мутация G-42, ТАПАЙ"}
      >
        <pre style={{ userSelect: "none" }}>{GUSS}</pre>

        <Divider />
        <div style={{ height: "100px" }}>
          {info.status === "active" && (
            <ActiveInfo points={points} endDate={info.round.endDate} />
          )}
          {info.status === "pending" && (
            <Cooldown startDate={info.round.startDate} />
          )}
          {info.status === "finished" && (
            <FinishStats
              totalPoints={info.round.totalPoints}
              myPoints={info.myPoints}
              winner={info.winner || ""}
            />
          )}
        </div>
      </Card>
      <Button type={"text"} ghost onClick={() => navigate(ROUTES.ROUNDS.to)}>
        Все раунды
      </Button>
    </Flex>
  );
};

export default RoundPage;
