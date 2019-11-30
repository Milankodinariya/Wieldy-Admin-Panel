import React, { Component } from "react";
import moment from "moment/moment";
import { Steps, Row, Col, Card, Input, Button, Collapse, DatePicker, Form, Icon, Checkbox, Radio } from "antd";
import TreeView from "./components/TreeView"
import Contractor from "../../assets/images/contractor.png"

const { Panel } = Collapse;

const dateFormat = 'YYYY/MM/DD'

class SamplePage extends Component {
  constructor(props){
    super(props)
    this.state={
      userType: "",
      userName: "",
      userEmplId: "",
      onView: false,
      secondStep: false,
      thirdStep: false,
      currentStep: 0
    }
  }

  onChange = (event) => {
    const { value, name } = event && event.target || {}
    if(name === "userName" || name === "userEmplId"){
      this.setState({
        [name]: value
      })
    } else {
      this.setState({
        userType: event
      })
    }
  }

  render(){
    const { currentStep, userType, userName, userEmplId, onView, secondStep, thirdStep } = this.state
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };

    const formsItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div>
        {/*<Steps current={currentStep}>
          <Step title="Edison User Security Authorization" onChange={() => this.setState(0)}/>
          <Step title="Role Catalog" onChange={() => this.setState(1)}/>
          <Step title="Summary and Submit" onChange={() => this.setState(2)}/>
        </Steps>
        { currentStep === 0 ? <FirstStep onStepChange={(step) => this.setState({currentStep: step})}/> : null }
        { currentStep === 1 ? <SecondStep onStepChange={(step) => this.setState({currentStep: step})}/> : null }
        { currentStep === 2 ? <ThirdStep onStepChange={(step) => this.setState({currentStep: step})}/> : null }*/}
        { !userType ?
          <div>
            <h1 className="gx-login-title">Select User Type.</h1>

            <div style={{padding: '30px'}}>
              <Row gutter={16}>
                <Col xs={24} sm={12} md={12} lg={8}>
                  <Card bordered={false} style={{backgroundColor: "#1890ff", cursor: "pointer"}}
                        onClick={() => this.onChange("State Employee")}>
                    <div style={{textAlign: "center"}}>
                      {/*<img src={Contractor} style={{width: 100}}/>*/}
                      <Icon type="user" style={{fontSize: 100, color: "black"}}/>
                      <h2 className="gx-login-title" style={{color: "white"}}>State Employee</h2>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                  <Card bordered={false} style={{backgroundColor: "#1890ff", cursor: "pointer"}}
                        onClick={() => this.onChange("Contractor")}>
                    <div style={{textAlign: "center"}}>
                      <Icon type="usergroup-add"  style={{fontSize: 100, color: "black"}}/>
                      <h2 className="gx-login-title" style={{color: "white"}}>Contractor</h2>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                  <Card bordered={false} style={{backgroundColor: "#1890ff", cursor: "pointer"}}
                        onClick={() => this.onChange("Other Non-Employee")}>
                    <div style={{textAlign: "center"}}>
                      {/*<img src={Contractor} style={{width: 100}}/>*/}
                      <Icon type="user-add"  style={{fontSize: 100, color: "black"}}/>
                      <h2 className="gx-login-title" style={{color: "white"}}>Other Non-Employee</h2>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div> : null
        }

        {
          userType && !secondStep ?
            <div>
              <h1 className="gx-login-title">Enter User's information</h1>
              <br/>
              <Row gutter={8}>
                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                  <p>User’s Name </p>
                  <Input placeholder="User’s Name" name="userName" value={userName} onChange={this.onChange}/>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                  <p>User’s Empl ID</p>
                  <Input placeholder="User’s Empl ID" name="userEmplId" value={userEmplId} onChange={this.onChange}/>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                  <p>&nbsp;</p>
                  <Button type="primary" onClick={() => this.setState({onView: true})} disabled={!(userName && userEmplId)} >Search</Button>
                </Col>
              </Row>

              { userName && userEmplId && onView && !secondStep ?

                <div style={{marginTop: 15}}>
                  {/*<h2 className="gx-entry-title">Agency Information</h2>*/}
                  <Collapse defaultActiveKey={['1']} >
                    <Panel header={<h3>Users Information</h3>} key="1" disabled showArrow={false}>
                      <Row gutter={8}>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                          <Form.Item label="Name">
                            <Input placeholder="First Name" value="John Doe" disabled/>
                          </Form.Item>
                          <Form.Item label="Birth Date">
                            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} disabled/>
                          </Form.Item>

                          { userType !== "State Employee" ?
                            <div>
                              <Form.Item label="Organization/Vendor">
                                <Input placeholder="First Name" value="Vender" disabled/>
                              </Form.Item>
                              <Form.Item label="Last 4 digits of SSN">
                                <Input placeholder="First Name" value="**** 5698" disabled/>
                              </Form.Item>
                            </div>
                              : null
                          }

                          <Form.Item label="User’s Department ID">
                            <Input placeholder="First Name" value="568" disabled/>
                          </Form.Item>
                          <Form.Item label="Employee ID">
                            <Input placeholder="First Name" value="986" disabled/>
                          </Form.Item>
                          <Form.Item label="Email Address">
                            <Input placeholder="First Name" value="testuser@gmail.com" disabled/>
                          </Form.Item>
                          <Form.Item label="Phone Number">
                            <Input placeholder="First Name" value="9876543210" disabled/>
                          </Form.Item>
                        </Form>

                      </Row>
                    </Panel>
                  </Collapse>

                  <br/>
                  <span style={{cursor: "pointer"}}>
                    <Button type="primary" onClick={() => this.setState({userName: "", userEmplId: "", userType: "", onView: false, secondStep: false})}><Icon type="left" /></Button>
                  </span>
                  <span style={{float: "right", cursor: "pointer"}}>
                    <Button type="primary" onClick={() => this.setState({secondStep: true})}><Icon type="right" /></Button>
                  </span>

                </div> : null
              }

            </div> : null
        }

        { secondStep && !thirdStep ?
          <div>

            <div>
              <h1 className="gx-login-title">User Access</h1>
            </div>

            <br/>
            <Form {...formsItemLayout} >
              <Form.Item label="Access Type">
                <Radio.Group >
                  <Radio style={radioStyle} value={1}>
                    Role Addition Only
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Role Removal Only
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Effective Date">
                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat}/>
              </Form.Item>
              <Form.Item label="Environment">
                <Checkbox >Dev</Checkbox><br />
                <Checkbox >Test</Checkbox><br />
                <Checkbox >UAT</Checkbox><br />
                <Checkbox >Staging</Checkbox><br />
                <Checkbox >Pre production</Checkbox><br />
                <Checkbox >Production</Checkbox>
              </Form.Item>
            </Form>
            <br/>

            <span style={{cursor: "pointer"}}>
              <Button type="primary" onClick={() => this.setState({secondStep: false})}><Icon type="left" /></Button>
            </span>
            <span style={{float: "right", cursor: "pointer"}}>
              <Button type="primary" onClick={() => this.setState({thirdStep: true})}><Icon type="right" /></Button>
            </span>

          </div>

          : null }

        { thirdStep ? <TreeView/> : null }

      </div>
    );
  }
};

export default SamplePage;
