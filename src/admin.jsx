import React, { Component } from 'react'
import { Row ,Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from "./components/NavLeft"

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span="3">
            <NavLeft></NavLeft>
          </Col>
          <Col span="21">
            <Header></Header>
            <Footer></Footer>
          </Col>
        </Row>
      </div>
    )
  }
}
