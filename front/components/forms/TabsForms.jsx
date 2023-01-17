import { Tabs } from 'antd';
import AuthForm from './AuthForm';
import RegisterForm from './RegisterForm';
import ForgotForm from './ForgotForm';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Войти`,
    children: <AuthForm/>,
  },
  {
    key: '2',
    label: `Регистрация`,
    children: <RegisterForm/>,
  },
  {
    key: '3',
    label: `Забыли пароль`,
    children: <ForgotForm/>,
  },
];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App;