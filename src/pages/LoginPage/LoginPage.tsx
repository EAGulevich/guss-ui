import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Card,
  Collapse,
  type CollapseProps,
  Form,
  type FormProps,
  Input,
  message,
} from "antd";

import { api } from "../../api/api.ts";
import { ROUTES } from "../../routes.ts";
import { useUserStore } from "../../store.ts";
import { LoginPageWrapper } from "./styles.tsx";

type FieldType = {
  username: string;
  password: string;
};

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Эй, загляни сюда!",
    children: (
      <>
        <Alert
          message="Не знаешь пароль? Вводи любой и уникальное имя!"
          type="info"
          showIcon
        />
        <Alert
          message="Хочешь быть админом? Вводи admin:admin !"
          type="warning"
          showIcon
        />
        <Alert
          message="А тебя случайно зовут не Никита?"
          type="error"
          showIcon
        />
        <Alert
          message={
            <>
              По пути <Link to={"/bonus"}>/bonus</Link> тебя ждет сюрприз
            </>
          }
          type="success"
          showIcon
        />
      </>
    ),
  },
];

const LoginPage = () => {
  const [messageApi, contextHolder] = message.useMessage({
    maxCount: 3,
  });
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      setIsLoading(true);
      const res = await api.post<{
        user: { id: string; username: string; role: string };
      }>("/auth/login", {
        username: values.username,
        password: values.password,
      });
      setIsLoading(false);
      setUser(res.data.user);
      navigate(ROUTES.ROUNDS.to);
    } catch (err: unknown) {
      setIsLoading(false);
      messageApi.open({
        type: "error",
        content:
          // TODO: затипизировать
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          err?.response?.data?.error === "WRONG_PASSWORD"
            ? "Гусь хочет другой пароль для этого имени"
            : "Что-то не так... Попробуйте перезагрузить страницу",
        duration: 5,
      });
    }
  };

  return (
    <LoginPageWrapper gap="middle" align="center" justify="center">
      {contextHolder}
      <Card>
        <Form
          name="login"
          onFinish={handleLogin}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Имя пользователя:"
            name="username"
            rules={[{ required: true, message: "Введите имя" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль:"
            name="password"
            rules={[{ required: true, message: "Введите пароль" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              style={{ width: "100%" }}
              disabled={isLoading}
              type="default"
              htmlType="submit"
              icon={isLoading ? <LoadingOutlined /> : undefined}
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Collapse items={items} />
    </LoginPageWrapper>
  );
};

export default LoginPage;
