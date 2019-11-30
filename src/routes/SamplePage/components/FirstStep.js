import React, { Component } from "react";
import { Checkbox, Input, Col, Row, Collapse, InputNumber, Button } from "antd";

const { Panel } = Collapse;

const userTypeOptions = ['State Employee', 'Contractor', 'Other Non-Employee'];
const accessOptions = ['Role Additional Only', 'Role Removal only'];


class FirstStep extends Component {
  constructor(props){
    super(props)
    this.state= {
      userType: []
    }
  }

  onChange = (type) => {
    const { userType } = this.state
    const value = type.filter(t => userType.indexOf(t) === -1)
    this.setState({
      userType: value
    })
  }

  onNumberChange = (value) => {
    console.log(value)
  }

  render(){
    const { userType } = this.state
    return (
      <div className="gx-main-content-wrapper">
        <div className="ant-col ant-col-24">
          <div className="gx-card">
            <div className="gx-card-body">
              <div>
                <h2 className="gx-entry-title">User Type</h2>
                <Checkbox.Group options={userTypeOptions} value={userType} onChange={this.onChange} />
              </div>
              <div style={{marginTop: 15}}>
                <h2 className="gx-entry-title">User Details</h2>
                <Row gutter={8}>
                  <Col xs={20} sm={4} md={6} lg={8} xl={4}><Input placeholder="User’s Name" /></Col>
                  <Col xs={20} sm={4} md={6} lg={8} xl={4}><Input placeholder="User’s Empl ID" /></Col>
                </Row>
              </div>
              <div style={{marginTop: 15}}>
                <h2 className="gx-entry-title">Access</h2>
                <Checkbox.Group options={accessOptions} value={userType} onChange={this.onChange} />
              </div>
              <div style={{marginTop: 15}}>
                {/*<h2 className="gx-entry-title">User Information</h2>*/}
                <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1"}}>
                  <Panel header="User Information" key="1">
                    <Row gutter={8}>
                      <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                        <h2 className="gx-entry-title">First Name</h2>
                        <Input placeholder="First Name" />
                      </Col>
                      <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Middle Name</h2>
                        <Input placeholder="Middle Name" />
                      </Col>
                      <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Last Name</h2>
                        <Input placeholder="Last Name" />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={2}>
                        <h2 className="gx-entry-title">Birth Month</h2>
                        <InputNumber min={1} max={12} onChange={this.onNumberChange} />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={2}>
                        <h2 className="gx-entry-title">Birth Day</h2>
                        <InputNumber min={1} max={31} onChange={this.onNumberChange} />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={2}>
                        <h2 className="gx-entry-title">Year</h2>
                        <InputNumber min={1900} max={2100} onChange={this.onNumberChange} />
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Organization/Vendor</h2>
                        <Input placeholder="Organization/Vendor" />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Last 4 digits of SSN</h2>
                        <Input placeholder="Last 4 digits of SSN" />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">User’s Department ID</h2>
                        <Input placeholder="User’s Department ID" />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Employee ID, if state employee</h2>
                        <Input placeholder="Employee ID" />
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Email Address</h2>
                        <Input placeholder="Email Address" />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Phone Number</h2>
                        <Input placeholder="Phone Number" />
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>
              </div>
              <div style={{marginTop: 15}}>
                {/*<h2 className="gx-entry-title">Agency Information</h2>*/}
                <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1"}}>
                  <Panel header="Agency Information" key="1">
                    <Row gutter={8}>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Agency Name</h2>
                        <Input placeholder="Agency Name" />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Agency Bus Unit</h2>
                        <Input placeholder="Agency Bus Unit" />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Requester Name</h2>
                        <Input placeholder="Requester Name" />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Requester Edison Access ID</h2>
                        <Input placeholder="Requester Edison Access ID" />
                      </Col>
                    </Row>
                    <Row gutter={8}>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Requester Phone Number</h2>
                        <Input placeholder="Requester Phone Number" />
                      </Col>
                      <Col xs={20} sm={10} md={6} lg={8} xl={6}>
                        <h2 className="gx-entry-title">Requester Email</h2>
                        <Input placeholder="Requester Email" />
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>
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

export default FirstStep;
