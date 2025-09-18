import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";

import { GUSS } from "./GUSS.ts";

interface RoundInfo {
  round: { id: string; startDate: string; endDate: string };
}

const RoundPage = () => {
  // TODO: типизация параметров
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState<RoundInfo | null>(null);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchInfo = async () => {
      // TODO: запрос за инфо о раунде
      const response: RoundInfo = {
        round: {
          id: id || "undefined",
          startDate: "sadf",
          endDate: "sadf",
        },
      };
      setInfo(response);
      setPoints(0); // todo from response
    };
    fetchInfo();
    //   TODO: константа
    const interval = setInterval(fetchInfo, 3000); // TODO: компонент счетчик должен быть, в зеленый когда стейт совпал, серый - из компонента стейт
    return () => clearInterval(interval);
  }, [id]);

  const handleTap = async () => {
    // TODO: запрос оправки тапа

    setPoints((prev) => prev + 1);
  };

  if (!info) return <Typography>Loading...</Typography>;

  return (
    <div>
      <div onClick={handleTap} style={{ cursor: "cell" }} title={"ТАПАЙ"}>
        <pre style={{ userSelect: "none" }}>{GUSS}</pre>
      </div>
      <div>round info</div>
      {points}
    </div>
  );
};

export default RoundPage;
