import { useNavigate } from "react-router-dom";
import { Button, Card, Form, type FormProps, Input } from "antd";

import { ROUTES } from "../../routes.ts";
import { useUserStore } from "../../store.ts";
import { LoginPageWrapper } from "./styles.tsx";

type FieldType = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin: FormProps<FieldType>["onFinish"] = async (values) => {
    // TODO: запрос на логинизацию
    const response = {
      id: "1",
      username: values.username,
      role: "admin",
    };
    setUser(response);
    navigate(ROUTES.ROUNDS.to);
  };

  // TODO: Имя страницы в шапку добавить

  return (
    <LoginPageWrapper gap="middle" align="center" justify="center">
      <Card title="Войти">
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
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </LoginPageWrapper>
  );
};

export default LoginPage;
