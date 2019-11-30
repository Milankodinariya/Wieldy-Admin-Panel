import React, { Component } from "react";
import { Steps, Input, Col, Row, Collapse, InputNumber, Button, DatePicker } from "antd";
import moment from 'moment';
const { Panel } = Collapse;

const { Step } = Steps;

const dateFormat = 'YYYY/MM/DD'

class AgencyInfo extends Component {
  constructor(props){
    super(props)
    this.state={
      currentStep: 0
    }
  }

  render(){
    return (
      <div className="gx-main-content-wrapper">
        <div className="ant-col ant-col-24">
          <div className="gx-card">
            <div className="gx-card-body">

              <div >
                <h1 className="gx-login-title">Agency Information</h1>
                {/*<h2 className="gx-entry-title">User Information</h2>*/}
                <Row gutter={8}>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Agency Name</h2>
                    <Input placeholder="Agency Name" />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Agency Bus Unit</h2>
                    <Input placeholder="Agency Bus Unit" />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Requester Name</h2>
                    <Input placeholder="Requester Name" />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Requester Edison Access ID</h2>
                    <Input placeholder="Requester Edison Access ID" />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Requester Phone Number</h2>
                    <Input placeholder="Requester Phone Number" />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Requester Email</h2>
                    <Input placeholder="Requester Email" />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AgencyInfo;
