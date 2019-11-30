import React, { Component } from "react";
import { Checkbox, Col, Row, Tree, Layout, Form, Button, Drawer } from "antd";
import IntlMessages from "util/IntlMessages";
import AppModuleHeader from "../../../components/AppModuleHeader";
import Auxiliary from "../../../util/Auxiliary";
import CustomScrollbars from "util/CustomScrollbars";
import {data} from "./Options"
const { Sider, Content } = Layout;
const edisonQueryAccessOptions = ['GN-1008 Edison HCM Query Manager', 'GN-1004 Edison Query Viewer', 'GN-1001 Edison Query Scheduler', 'ED-1009 Edison Query Tree',
'ED-1004 Central Query Tree', 'ED-1001 Agency Query Tree', 'PY-1019 Payroll Query Tree', 'HR-1032 HR Query Tree', 'GN-1003 HCM Query Administrator']
const { TreeNode } = Tree;



class TreeView extends Component {
  constructor(props){
    super(props)
    this.state= {
      userType: [],
      expandedKeys: [],
      searchValue: '',
      item: {},
      autoExpandParent: true,
      drawerState: false
    }
  }

  onExpand = expandedKeys => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onSelect = (item) => {debugger
    if(item.children === undefined || item.key === "0-0"){
      this.setState({item})
    }
  }

  updateSearch = (event) => {
    this.setState({
      searchTodo: event.target.value
    })
  }


  render(){
    const { searchValue, expandedKeys, autoExpandParent, item, drawerState } = this.state;
    console.log({item: item.option})
    const loop = data =>
      data.map(item => {
        const index = item.title.indexOf(searchValue);
        const beforeStr = item.title.substr(0, index);
        const afterStr = item.title.substr(index + searchValue.length);
        const title =
          index > -1 ? (
            <span onClick={() => this.onSelect(item)}>
              {beforeStr}
              <span style={{ color: '#f50' }}>{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span onClick={() => console.log(262)}>{item.title}</span>
          );
        if (item.children) {
          return (
            <TreeNode key={item.key} title={title}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.key} title={title} />;
      });
    return (
      <div>
        {/*<Tree
          onExpand={this.onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
        >
          {loop(data)}
        </Tree>*/}

        {/*<div>

          <Layout>
            <Sider style={{height: 750, overflowY: "scroll"}}>
              <Tree
                onExpand={this.onExpand}
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
              >
                {loop(data)}
              </Tree>
            </Sider>
            <Layout>
              <Content>
                <div style={{paddingLeft: 15}}>
                  <h1 className="gx-login-title">{item && item.title}</h1>
                  <Checkbox.Group style={{ width: '100%' }} >
                    <Row>
                      { item && item.option && item.option.map((option, index) => (
                        <Col span={6} style={{marginTop: 5}} key={index.toString()}>
                          <Checkbox value={option}>{option}</Checkbox>
                        </Col>
                      )) }
                    </Row>
                  </Checkbox.Group>
                </div>

              </Content>
            </Layout>
          </Layout>
        </div>*/}

        <div className="gx-main-content">
          <div className="gx-app-module">
            <div className="gx-d-block gx-d-lg-none">
              <Drawer
                placement="left"
                closable={false}
                visible={drawerState}
                // onClose={this.onToggleDrawer.bind(this)}
              >
                <div className="gx-module-side">
                  <div className="gx-module-side-header">
                    {item && item.title}


                  </div>
                  <div className="gx-module-side-content">
                    <CustomScrollbars className="gx-module-side-scroll">
                      <Tree
                        onExpand={this.onExpand}
                        expandedKeys={expandedKeys}
                        autoExpandParent={autoExpandParent}
                      >
                        {loop(data)}
                      </Tree>
                    </CustomScrollbars>
                  </div>
                </div>
              </Drawer>
            </div>
            <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
              <div className="gx-module-side">
                <div className="gx-module-side-header">
                  {item && item.title}

                </div>
                <div className="gx-module-side-content">
                  <CustomScrollbars className="gx-module-side-scroll">
                    <Tree
                      onExpand={this.onExpand}
                      expandedKeys={expandedKeys}
                      autoExpandParent={autoExpandParent}
                    >
                      {loop(data)}
                    </Tree>
                  </CustomScrollbars>
                </div>
              </div>
            </div>

            <div className="gx-module-box">
              <div className="gx-module-box-header">

              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     // onClick={this.onToggleDrawer.bind(this)}
                  />
              </span>
                <AppModuleHeader placeholder="Search To Do" user={this.state.user}
                                 onChange={this.updateSearch}
                                 value={this.state.searchTodo}/>
              </div>
              <div style={{marginLeft: 15}}>
                <Checkbox.Group style={{ width: '100%' }} >
                  <Row>
                    { item && item.option && item.option.map((option, index) => (
                      <Col span={6} style={{marginTop: 5}} key={index.toString()}>
                        <Checkbox value={option}>{option}</Checkbox>
                      </Col>
                    )) }
                  </Row>
                </Checkbox.Group>
              </div>
            </div>
          </div>
          {/*{showMessage && message.info(<span id="message-id">{alertMessage}</span>, 3, this.handleRequestClose)}*/}
        </div>

      </div>
    );
  }
};

export default TreeView;
