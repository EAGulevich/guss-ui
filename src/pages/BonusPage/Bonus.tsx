import ReactPlayer from "react-player";
import { Flex } from "antd";

const BonusPage = () => {
  return (
    <Flex
      style={{ height: "100%", width: "100%" }}
      justify={"center"}
      align={"center"}
    >
      <ReactPlayer
        src="https://youtube.com/shorts/uLQ-5OX8m3Q?si=-Ej5qAVUK4yiI71g"
        height={"80%"}
        controls
      />
    </Flex>
  );
};

export default BonusPage;
