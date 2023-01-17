import React from "react";

import { Button, Col, Row } from "antd";
import TabsForms from "../components/forms/TabsForms"

const main = () => {
    return(
        <>
            <Row justify="center">
                <h1>SOLAR</h1>
            </Row>
            <Row justify="center">
                <Col>
                    <TabsForms/>
                </Col>
            </Row>

        </>
    )
}

export default main;