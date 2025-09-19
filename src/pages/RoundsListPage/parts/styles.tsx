import { Card, List } from "antd";
import styled from "styled-components";

export const RoundItemWrapper = styled(List.Item)`
  display: flex;
  cursor: pointer;
`;

export const CardWrapper = styled(Card)`
  width: 100%;
  box-shadow: 0 0 1px 1px antiquewhite;

  &:hover {
    background: #faebd70a;
    box-shadow: 0 0 5px 2px antiquewhite;
  }
`;
