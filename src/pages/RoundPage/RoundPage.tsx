import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import axios from "axios";

import { GUSS } from "./GUSS.ts";

interface RoundInfo {
  round: { id: string; startDate: string; endDate: string; totalPoints: 10 };
  status: "pending" | "active" | "finished";
  myPoints: number;
  winner?: string;
}

const RoundPage = () => {
  // TODO: типизация параметров
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState<RoundInfo | null>(null);
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await axios.get<RoundInfo>(`/api/rounds/${id}`, {
        withCredentials: true,
      });
      setInfo(response.data);
    };
    fetchInfo();
    //   TODO: константа
    const interval = setInterval(fetchInfo, 3000); // TODO: компонент счетчик должен быть, в зеленый когда стейт совпал, серый - из компонента стейт
    return () => clearInterval(interval);
  }, [id]);

  const handleTap = async () => {
    const response = await axios.post<{ myPoints: 61 }>(
      `/api/rounds/${id}/tap`,
      {},
      { withCredentials: true },
    );
    setPoints(response.data.myPoints);
    // TODO: обработать ошибку
  };

  if (!info) return <Typography>Loading...</Typography>;

  return (
    <div>
      <div
        onClick={handleTap}
        style={{ cursor: "cell" }}
        title={"Гусь подхватил мутацию G-42, ТАПАЙ"}
      >
        <pre style={{ userSelect: "none" }}>{GUSS}</pre>
      </div>
      {info.status === "active" && (
        <div>
          <div>Раунд активен!</div>
          <div>До конца осталось: 00:23 TODO</div>
          <div>Мои очки - {points}</div>
        </div>
      )}
      {info.status === "pending" && (
        <div>
          <div>Cooldown </div>
          <div>До начала раунда: 00:15 TODO</div>
        </div>
      )}
      {info.status === "finished" && (
        <div>
          <div>Всего {info.round.totalPoints} </div>
          <div>Победитель - {info.winner}</div>
          <div>Мои очки - {info.myPoints}</div>
        </div>
      )}
    </div>
  );
};

export default RoundPage;
