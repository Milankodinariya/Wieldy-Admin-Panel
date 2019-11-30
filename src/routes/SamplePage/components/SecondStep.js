import React, { Component } from "react";
import { Checkbox, Input, Col, Row, Collapse, InputNumber, Button, Table } from "antd";

const { Panel } = Collapse;

const hcmDataAccessOptions = ['Department Level', 'Multiple Departments', 'Agency Level', 'Multiple Agencies'];
const edisonHCMOptions = ['PY-1018 Review Paycheck', 'ED-1003 HCM Audit', 'EDWF- 1002 HCM Workflow Administrator', 'HR-1031 HR Non-State User Admin', 'HR-1018 Edison HR\n' +
'Administrator', 'ED-1015 HCM Data Mover', 'CA-1004 Edison Payroll CA Administrator', 'CA-1003 Edison Finance CA Administrator', 'HR-1030 HR Edison App Services Syst',
'GN-1005 Security View Only Role for HCM', 'ED-1021 Manage GT eForms All Access', 'HR-1052 HR Edison Talent Administrator', 'ED-1044 GT3 eForms Edison Analytics',
  'ED-1045 GT3 eForms Edison Config Rpt', 'ED-1048 GT3 eForms Edison Technical', 'ED-1049 GT3 eForms Edison Func PRD'];
const edisonQueryAccessOptions = ['GN-1008 Edison HCM Query Manager', 'GN-1004 Edison Query Viewer', 'GN-1001 Edison Query Scheduler', 'ED-1009 Edison Query Tree',
'ED-1004 Central Query Tree', 'ED-1001 Agency Query Tree', 'PY-1019 Payroll Query Tree', 'HR-1032 HR Query Tree', 'GN-1003 HCM Query Administrator']


class SecondStep extends Component {
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

  render(){
    const { userType } = this.state
    return (
      <div className="gx-main-content-wrapper">
        <div className="ant-col ant-col-24">
          <div className="gx-card">
            <div className="gx-card-body">
              <div>
                {/*<h2 className="gx-entry-title">HCM Data Access Levels</h2>*/}
                <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1"}}>
                  <Panel header="HCM Data Access Levels" key="1">
                    <Checkbox.Group options={hcmDataAccessOptions} value={userType} onChange={this.onChange} />
                    <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1", marginTop: 10}}>
                      <Panel header="HCM Roles" key="1">
                        <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1", marginTop: 10}}>
                          <Panel header="Edison HCM" key="1">
                            <Checkbox.Group style={{ width: '100%' }} >
                              <Row>
                                { edisonHCMOptions.map(option => (
                                  <Col span={6} style={{marginTop: 5}}>
                                    <Checkbox value={option}>{option}</Checkbox>
                                  </Col>
                                )) }
                              </Row>
                            </Checkbox.Group>
                          </Panel>
                        </Collapse>

                        <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1", marginTop: 10}}>
                          <Panel header="Edison HCM Query Access" key="1">
                            <Checkbox.Group style={{ width: '100%' }} >
                              <Row>
                                { edisonQueryAccessOptions.map(option => (
                                  <Col span={6} style={{marginTop: 5}}>
                                    <Checkbox value={option}>{option}</Checkbox>
                                  </Col>
                                )) }
                              </Row>
                            </Checkbox.Group>
                          </Panel>
                        </Collapse>
                        <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1", marginTop: 10}}>
                          <Panel header="Edison Human Resources – Roles for Electronic Forms (ePAF and ePCR) Associated roles only. Edison staff does not need WF roles" key="1">
                            <Checkbox.Group style={{ width: '100%' }} >
                              <Row>
                                { edisonQueryAccessOptions.map(option => (
                                  <Col span={6} style={{marginTop: 5}}>
                                    <Checkbox value={option}>{option}</Checkbox>
                                  </Col>
                                )) }
                              </Row>
                            </Checkbox.Group>
                          </Panel>
                        </Collapse>
                      </Panel>
                    </Collapse>

                  </Panel>
                </Collapse>
                <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1", marginTop: 10}}>
                  <Panel header="ELM Roles" key="1">
                    <Checkbox.Group options={hcmDataAccessOptions} value={userType} onChange={this.onChange} />
                    <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1", marginTop: 10}}>
                      <Panel header="Edison ELM" key="1">
                        <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1", marginTop: 10}}>
                          <Panel header="Edison ELM Query Access" key="1">
                            <Checkbox.Group style={{ width: '100%' }} >
                              <Row>
                                { edisonHCMOptions.map(option => (
                                  <Col span={6} style={{marginTop: 5}}>
                                    <Checkbox value={option}>{option}</Checkbox>
                                  </Col>
                                )) }
                              </Row>
                            </Checkbox.Group>
                          </Panel>
                        </Collapse>

                        <Collapse defaultActiveKey={['1']} style={{backgroundColor: "#d2f6c1", marginTop: 10}}>
                          <Panel header="Edison Portal" key="1">
                            <Checkbox.Group style={{ width: '100%' }} >
                              <Row>
                                { edisonQueryAccessOptions.map(option => (
                                  <Col span={6} style={{marginTop: 5}}>
                                    <Checkbox value={option}>{option}</Checkbox>
                                  </Col>
                                )) }
                              </Row>
                            </Checkbox.Group>
                          </Panel>
                        </Collapse>
                      </Panel>
                    </Collapse>

                  </Panel>
                </Collapse>
              </div>

              <Row type="flex" style={{alignItems: 'center', marginTop: 20}}>
                <Button type="primary" block onClick={() => this.props.onStepChange(2)}>
                  Primary
                </Button>
                <div style={{color: "#038fde", cursor: "pointer"}} onClick={() => this.props.onStepChange(0)}>Back To Step 1</div>
              </Row>
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default SecondStep;
