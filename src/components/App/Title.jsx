import React from 'react'
import { Typography, Row, Col } from 'antd'

const { Title } = Typography

function AppName() {
    return(
        <>
            <Row justify="center">
                <Col>
                    <Title>Календарь</Title>
                </Col>
            </Row>
        </>
    )
}
export default AppName