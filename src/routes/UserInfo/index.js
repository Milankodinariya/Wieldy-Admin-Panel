import React, { Component } from "react";
import { Steps, Input, Col, Row, Collapse, InputNumber, Button, DatePicker } from "antd";
import moment from 'moment';
const { Panel } = Collapse;

const { Step } = Steps;

const dateFormat = 'YYYY/MM/DD'

class UserInfo extends Component {
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
                <h1 className="gx-login-title">User Information</h1>
                {/*<h2 className="gx-entry-title">User Information</h2>*/}
                <Row gutter={8}>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Name</h2>
                    <Input placeholder="First Name" value="John Doe" disabled />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Birth Date</h2>
                    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                  </Col>

                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Organization/Vendor</h2>
                    <Input placeholder="Organization/Vendor" />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Last 4 digits of SSN</h2>
                    <Input placeholder="Last 4 digits of SSN" />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">User’s Department ID</h2>
                    <Input placeholder="User’s Department ID" />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Employee ID, if state employee</h2>
                    <Input placeholder="Employee ID" />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Email Address</h2>
                    <Input placeholder="Email Address" />
                  </Col>
                  <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <h2 className="gx-entry-title">Phone Number</h2>
                    <Input placeholder="Phone Number" />
                  </Col>
                </Row>
              </div>

              <Row type="flex" style={{alignItems: 'center', marginTop: 20}}>

                <Button type="primary" block onClick={() => this.props.onStepChange(1)}>
                  Submit for Authorization
                </Button>

              </Row>
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default UserInfo;
