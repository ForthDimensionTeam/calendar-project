import React from 'react'
import { Tabs, Card, Row, Col } from 'antd'
import Auth from '../Auth/AuthForm'
import Register from '../Register/RegisterForm'

function Form() {
    return(
        <>
        <Row justify="center">
            <Col>
                <Card>
                    <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Войти" key="1">
                                <Auth/>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Регистрация" key="2">
                                <Register/>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Забыли пароль?" key="3">
                                В разработке
                        </Tabs.TabPane>
                    </Tabs>
                </Card>
            </Col>
        </Row> 
        </>
    )
}
export default Form