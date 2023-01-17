import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const AuthForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={<UserOutlined />}
        name="username"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите логин!',
          },
        ]}
      >
        <Input placeholder='Логин'/>
      </Form.Item>

      <Form.Item
        label={<LockOutlined />}
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите пароль!',
          },
        ]}
      >
        <Input.Password placeholder='Пароль'/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        
      >
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item
        
      >
        <Button href="/tasks/calendar" type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AuthForm;