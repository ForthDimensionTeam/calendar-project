import { Button, Checkbox, Form, Input } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
const RegisterForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={<MobileOutlined />}
        placeholder="Введите номер телефона"
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите номер телефона!',
          },
        ]}
      >
        <Input placeholder='Номер телефона'/>
      </Form.Item>

      <Form.Item
        label=""
        name="password"
        rules={[
          {
            required: true,
            message: 'Придумайте пароль!',
          },
        ]}
      >
        <Input.Password placeholder='Пароль'/>
      </Form.Item>

      <Form.Item
        label=""
        name="password"
        rules={[
          {
            required: true,
            message: 'Придумайте пароль!',
          },
        ]}
      >
        <Input.Password placeholder='Подтвердите пароль'/>
      </Form.Item>

      <Form.Item
        
      >
        <Button href="/tasks/calendar" type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegisterForm;