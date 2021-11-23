import React from 'react';
import {Category, Component, Palette, Variant,} from '@react-buddy/ide-toolbox';
import {
  AppstoreOutlined,
  MailOutlined,
  SearchOutlined,
  SettingOutlined,
  UploadOutlined,
  UserOutlined
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Text from 'antd/es/typography/Text';
import Link from 'antd/es/typography/Link';
import Button from 'antd/es/button';
import Sider from "antd/es/layout/Sider";
import Col from 'antd/es/grid/col';
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {
  Affix, AutoComplete,
  Avatar,
  Badge,
  Breadcrumb, Calendar, Card, Carousel, Cascader,
  Collapse, Comment, DatePicker, Descriptions, Divider, Dropdown, Form, Input, InputNumber, Menu,
  PageHeader, Pagination, Rate, Row, Select, Slider, Space, Steps, Switch, Table, TimePicker,
  Transfer, TreeSelect, Tooltip, Upload, Image, Empty, List, Popover, Statistic, Tabs, Tag, Timeline, Tree, Drawer, Modal, Popconfirm, Progress, Result, Skeleton, Spin
} from "antd/es";
import Checkbox from "antd/es/checkbox/Checkbox";
import Radio, {Group} from "antd/es/radio";
import SubMenu from 'antd/es/menu/SubMenu';
import {TreeNode} from "antd/es/tree-select";
import {Alert} from "antd";

export default () => (
  <Palette>
    <Category name="Button">
      <Component name="Button">
        <Variant>
          <Button>Default Button</Button>
        </Variant>
        <Variant name="primary">
          <Button type="primary">Primary Button</Button>
        </Variant>
        <Variant name="dashed">
          <Button type="dashed">Dashed Button</Button>
        </Variant>
        <Variant name="text">
          <Button type="text">Text Button</Button>
        </Variant>
        <Variant name="link">
          <Button type="link">Link Button</Button>
        </Variant>
        <Variant name="icon - circle">
          <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
        </Variant>
        <Variant name="ghost">
          <Button ghost>Ghost Default</Button>
        </Variant>
        <Variant name="ghost - primary">
          <Button type="primary" ghost>Ghost Primary</Button>
        </Variant>
        <Variant name="ghost - dashed">
          <Button type="dashed" ghost>Ghost Dashed</Button>
        </Variant>
        <Variant name="ghost - link">
          <Button type="link" ghost>Ghost Link</Button>
        </Variant>
        <Variant name="danger">
          <Button danger>Danger Default</Button>
        </Variant>
        <Variant name="danger - primary">
          <Button type="primary" danger>Danger Primary</Button>
        </Variant>
        <Variant name="danger - dashed">
          <Button type="dashed" danger>Danger Dashed</Button>
        </Variant>
        <Variant name="danger - text">
          <Button type="text" danger>Danger Text</Button>
        </Variant>
        <Variant name="danger - link">
          <Button type="link" danger>Danger Link</Button>
        </Variant>
        <Variant name="block">
          <Button block>Block Default</Button>
        </Variant>
        <Variant name="block - primary">
          <Button type="primary" block>Block Primary</Button>
        </Variant>
        <Variant name="block - dashed">
          <Button type="dashed" block>Block Dashed</Button>
        </Variant>
        <Variant name="block - link">
          <Button type="link" block>Block Link</Button>
        </Variant>
      </Component>
    </Category>
    <Category name="Typography">
      <Component name="Title">
        <Variant name="h1">
          <Title>h1. Ant Design</Title>
        </Variant>
        <Variant name="h2">
          <Title level={2}>h2. Ant Design</Title>
        </Variant>
        <Variant name="h3">
          <Title level={3}>h3. Ant Design</Title>
        </Variant>
        <Variant name="h4">
          <Title level={4}>h4. Ant Design</Title>
        </Variant>
        <Variant name="h5">
          <Title level={5}>h5. Ant Design</Title>
        </Variant>
      </Component>
      <Component name="Text">
        <Variant>
          <Text>Ant Design (default)</Text>
        </Variant>
        <Variant name="secondary">
          <Text type="secondary">Ant Design (secondary)</Text>
        </Variant>
        <Variant name="success">
          <Text type="success">Ant Design (success)</Text>
        </Variant>
        <Variant name="warning">
          <Text type="warning">Ant Design (warning)</Text>
        </Variant>
        <Variant name="danger">
          <Text type="danger">Ant Design (danger)</Text>
        </Variant>
        <Variant name="disabled">
          <Text disabled>Ant Design (disabled)</Text>
        </Variant>
        <Variant name="mark">
          <Text mark>Ant Design (mark)</Text>
        </Variant>
        <Variant name="code">
          <Text code>Ant Design (code)</Text>
        </Variant>
        <Variant name="keyboard">
          <Text keyboard>Ant Design (keyboard)</Text>
        </Variant>
        <Variant name="underline">
          <Text underline>Ant Design (underline)</Text>
        </Variant>
        <Variant name="delete">
          <Text delete>Ant Design (delete)</Text>
        </Variant>
        <Variant name="strong">
          <Text strong>Ant Design (strong)</Text>
        </Variant>
        <Variant name="italic">
          <Text italic>Ant Design (italic)</Text>
        </Variant>
      </Component>
      <Component name="Link">
        <Variant>
          <Link href="https://ant.design" target="_blank">Ant Design (Link)</Link>
        </Variant>
      </Component>
    </Category>
    <Category name="Layout">
      <Component name="Grid">
        <Variant name="two cols">
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
        </Variant>
        <Variant name="three cols">
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </Variant>
        <Variant name="four cols">
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </Variant>
      </Component>
      <Component name="Divider">
        <Variant>
          <Divider/>
        </Variant>
        <Variant name="dashed">
          <Divider dashed/>
        </Variant>
        <Variant name="with title">
          <Divider>Title</Divider>
        </Variant>
        <Variant name="vertical">
          <Divider type="vertical"/>
        </Variant>
      </Component>
      <Component name="Space">
        <Variant>
          <Space></Space>
        </Variant>
        <Variant name="vertical">
          <Space direction="vertical"></Space>
        </Variant>
      </Component>
      <Component name="App Layout">
        <Variant>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left sider">
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="right sider">
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Content>Content</Content>
              <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        </Variant>
        <Variant name="left full sider">
          <Layout>
            <Sider>Sider</Sider>
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Entry">
      <Component name="Form">
        <Variant>
          <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{required: true, message: 'Please input your username!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{required: true, message: 'Please input your password!'}]}
            >
              <Input.Password/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Variant>
      </Component>
      <Component name="AutoComplete">
        <Variant>
          <AutoComplete/>
        </Variant>
      </Component>
      <Component name="Cascader">
        <Variant>
          <Cascader/>
        </Variant>
      </Component>
      <Component name="Checkbox">
        <Variant>
          <Checkbox>Checkbox</Checkbox>
        </Variant>
      </Component>
      <Component name="DatePicker">
        <Variant>
          <DatePicker/>
        </Variant>
        <Variant name="show time">
          <DatePicker showTime={true}/>
        </Variant>
        <Variant name="week">
          <DatePicker picker="week"/>
        </Variant>
        <Variant name="month">
          <DatePicker picker="month"/>
        </Variant>
        <Variant name="quarter">
          <DatePicker picker="quarter"/>
        </Variant>
        <Variant name="year">
          <DatePicker picker="year"/>
        </Variant>
        {/*
        <Variant name="range">
          <DatePicker.RangePicker/>
        </Variant>
        */}
      </Component>
      <Component name="Input">
        <Variant>
          <Input/>
        </Variant>
        <Variant name="large">
          <Input size="large"/>
        </Variant>
        <Variant name="small">
          <Input size="small"/>
        </Variant>
        <Variant name="with prefix">
          <Input addonBefore="http://" defaultValue="mysite"/>
        </Variant>
        <Variant name="with postfix">
          <Input addonAfter=".com" defaultValue="mysite"/>
        </Variant>
      </Component>
      <Component name="InputNumber">
        <Variant>
          <InputNumber min={0} max={10} defaultValue={5}/>
        </Variant>
      </Component>
      <Component name="Radio">
        <Variant>
          <Group>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Group>
        </Variant>
      </Component>
      <Component name="Rate">
        <Variant>
          <Rate/>
        </Variant>
      </Component>
      <Component name="Select">
        <Variant>
          <Select defaultValue="lucy" style={{width: '100%'}}>
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              Disabled
            </Select.Option>
          </Select>
        </Variant>
        <Variant name="multiple">
          <Select defaultValue="lucy" style={{width: '100%'}} mode={"multiple"}>
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              Disabled
            </Select.Option>
          </Select>
        </Variant>
      </Component>
      <Component name="Slider">
        <Variant>
          <Slider defaultValue={30}/>
        </Variant>
      </Component>
      <Component name="Switch">
        <Variant>
          <Switch defaultChecked/>
        </Variant>
      </Component>
      <Component name="TimePicker">
        <Variant>
          <TimePicker format="HH:mm"/>,
        </Variant>
        <Variant name="range">
          <TimePicker.RangePicker/>
        </Variant>
      </Component>
      <Component name="Transfer">
        <Variant>
          <Transfer
            dataSource={[
              {key: '0', title: 'Apple'},
              {key: '1', title: 'Banana'}
            ]}
            titles={['Source', 'Target']}
            render={item => item.title}
            oneWay={false}
            style={{marginBottom: 16}}
          />
        </Variant>
      </Component>
      <Component name="TreeSelect">
        <Variant>
          <TreeSelect
            showSearch
            style={{width: '100%'}}
            dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
          >
            <TreeNode value="parent 1" title="parent 1">
              <TreeNode value="parent 1-0" title="parent 1-0">
                <TreeNode value="leaf1" title="leaf1"/>
                <TreeNode value="leaf2" title="leaf2"/>
              </TreeNode>
              <TreeNode value="parent 1-1" title="parent 1-1">
                <TreeNode value="leaf3" title={<b style={{color: '#08c'}}>leaf3</b>}/>
              </TreeNode>
            </TreeNode>
          </TreeSelect>
        </Variant>
      </Component>
      <Component name="Upload">
        <Variant>
          <Upload name={'file'}
                  action={'uploadActionUrl'}
                  headers={{
                    authorization: 'authorization header',
                  }}>
            <Button icon={<UploadOutlined/>}>Click to Upload</Button>
          </Upload>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name="Avatar">
        <Variant>
          <Avatar icon={<UserOutlined />} />
        </Variant>
        <Variant name="square">
          <Avatar icon={<UserOutlined />} shape={"square"}/>
        </Variant>
      </Component>
      <Component name="Badge">
        <Variant>
          <Badge count={25} />
        </Variant>
      </Component>
      <Component name="Calendar">
        <Variant>
          <Calendar/>
        </Variant>
      </Component>
      <Component name="Card">
        <Variant>
          <Card title="Card title">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Variant>
      </Component>
      <Component name="Carousel">
        <Variant>
          <Carousel>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Variant>
      </Component>
      <Component name="Collapse">
        <Variant>
          <Collapse defaultActiveKey={['1']}>
            <Collapse.Panel header="This is panel header 1" key="1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 2" key="2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse.Panel>
            <Collapse.Panel header="This is panel header 3" key="3">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse.Panel>
          </Collapse>
        </Variant>
      </Component>
      <Component name="Comment">
        <Variant>
          <Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure).
              </p>
            }
          >
          </Comment>
        </Variant>
      </Component>
      <Component name="Descriptions">
        <Variant>
          <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Jack Smith</Descriptions.Item>
          </Descriptions>
        </Variant>
      </Component>
      <Component name="Empty">
        <Variant>
          <Empty />
        </Variant>
      </Component>
      <Component name="Image">
        <Variant>
          <Image
            width={200}
            height={200}
            src="error"
            fallback="data:image/png;base64,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"
          />
        </Variant>
      </Component>
      <Component name="List">
        <Variant>
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={['Foo', 'Bar']}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </Variant>
      </Component>
      <Component name="Popover">
        <Variant>
          <Popover content={"Popover content"} title="Title">
            <Button type="primary">Hover me</Button>
          </Popover>
        </Variant>
      </Component>
      <Component name="Statistic">
        <Variant>
          <Statistic title="Active Users" value={112893} />
        </Variant>
      </Component>
      <Component name="Table">
        <Variant>
          <Table dataSource={[{name: 'John', age: 30}, {name: 'Lucy', age: 31}]}
                 columns={[{title: 'Name', dataIndex: 'name'}, {title: 'Age', dataIndex: 'age'}]}/>;
        </Variant>
      </Component>
      <Component name="Tabs">
        <Variant>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Variant>
      </Component>
      <Component name="Tag">
        <Variant>
          <Tag closable>
            Tag 2
          </Tag>
        </Variant>
      </Component>
      <Component name="Timeline">
        <Variant>
          <Timeline mode={"alternate"}>
            <Timeline.Item>Step 1</Timeline.Item>
            <Timeline.Item>Step 2</Timeline.Item>
            <Timeline.Item>Step 3</Timeline.Item>
          </Timeline>
        </Variant>
      </Component>
      <Component name="Tooltip">
        <Variant>
          <Tooltip placement="topLeft" title="Tooltip content">
            <Button>Hover Me</Button>
          </Tooltip>
        </Variant>
      </Component>
      <Component name="Tree">
        <Variant>
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            treeData={[
              {
                title: 'parent 1',
                key: '0-0',
                children: [
                  {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    disabled: true,
                    children: [
                      {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                      },
                      {
                        title: 'leaf',
                        key: '0-0-0-1',
                      },
                    ],
                  },
                  {
                    title: 'parent 1-1',
                    key: '0-0-1',
                    children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
                  },
                ],
              },
            ]}
          />
        </Variant>
      </Component>
    </Category>
    <Category name="Navigation">
      <Component name="Affix">
        <Variant>
          <Affix offsetTop={10}>Affix top</Affix>
        </Variant>
        <Variant name="bottom">
          <Affix offsetBottom={10}>Affix top</Affix>
        </Variant>
      </Component>
      <Component name="Breadcrumb">
        <Variant>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Variant>
      </Component>
      <Component name="Dropdown">
        <Variant>
          <Dropdown.Button overlay={<div>place Menu here</div>} placement="bottomCenter">
            Dropdown
          </Dropdown.Button>
        </Variant>
      </Component>
      <Component name="Menu">
        <Variant name="vertical">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined/>} title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Variant>
        <Variant name="horizontal">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode={"horizontal"}
          >
            <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined/>} title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Variant>
      </Component>
      <Component name="PageHeader">
        <Variant>
          <PageHeader
            onBack={() => null}
            title="Title"
            subTitle="This is a subtitle"
          />
        </Variant>
      </Component>
      <Component name="Pagination">
        <Variant>
          <Pagination showQuickJumper={true} showSizeChanger={true} defaultCurrent={2} total={500}/>
        </Variant>
      </Component>
      <Component name="Steps">
        <Variant>
          <Steps size="small" current={1}>
            <Steps.Step title="Finished"/>
            <Steps.Step title="In Progress"/>
            <Steps.Step title="Waiting"/>
          </Steps>
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name="Alert">
        <Variant name="success">
          <Alert message="Success Text" type="success" />
        </Variant>
        <Variant name="info">
          <Alert message="Info Text" type="info" />
        </Variant>
        <Variant name="warning">
          <Alert message="Warning Text" type="warning" />
        </Variant>
        <Variant name="error">
          <Alert message="Error Text" type="error" />
        </Variant>
      </Component>
      <Component name="Drawer">
        <Variant>
          <Drawer
            title="Basic Drawer"
            placement={"left"}
            closable={true}
            visible={true}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Variant>
      </Component>
      <Component name="Modal">
        <Variant>
          <Modal title="Basic Modal" visible={true}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Variant>
      </Component>
      <Component name="Popconfirm">
        <Variant>
          <Popconfirm
            title="Are you sure to delete this entity?"
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Variant>
      </Component>
      <Component name="Progress">
        <Variant>
          <Progress strokeLinecap="square" percent={30} />
        </Variant>
        <Variant name="circle">
          <Progress strokeLinecap="square" type="circle" percent={30} />
        </Variant>
        <Variant name="dashboard">
          <Progress strokeLinecap="square" type="dashboard" percent={30} />
        </Variant>
      </Component>
      <Component name="Result">
        <Variant>
          <Result
            status="success"
            title="Successfully Purchased!"
            subTitle="Order number: 2017182818828182881, configuration takes 1-5 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Manage
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}
          />
        </Variant>
      </Component>
      <Component name="Skeleton">
        <Variant>
          <Skeleton loading={true} active={true} avatar={true}/>
        </Variant>
      </Component>
      <Component name="Spin">
        <Variant>
          <Spin />
        </Variant>
      </Component>
    </Category>
  </Palette>
);

