import { Button, Checkbox, Form, Input } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
const ForgotForm = () => {
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
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите номер телефона!',
          },
        ]}
      >
        <Input placeholder="Номер телефона"/>
      </Form.Item>
        <Button href="/tasks/calendar" type="primary" htmlType="submit">
          Продолжить
        </Button>
    </Form>
  );
};
export default ForgotForm;