import React from 'react';
import {Category, Component, Palette, Variant,} from '@react-buddy/ide-toolbox';
import {AppstoreOutlined, MailOutlined, SearchOutlined, SettingOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Text from 'antd/es/typography/Text';
import Link from 'antd/es/typography/Link';
import Button from 'antd/es/button';

import Sider from "antd/es/layout/Sider";
import Col from 'antd/es/grid/col';
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {Affix, AutoComplete,
  Breadcrumb, Card, Cascader, DatePicker, Divider, Dropdown, Input, InputNumber, Menu,
  PageHeader, Pagination, Rate, Row, Select, Space, Steps, Table} from "antd/es";
import Checkbox from "antd/es/checkbox/Checkbox";
import Radio, {Group} from "antd/es/radio";
import SubMenu from 'antd/es/menu/SubMenu';

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
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
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
          <Divider />
        </Variant>
        <Variant name="dashed">
          <Divider dashed />
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
          <DatePicker picker="week" />
        </Variant>
        <Variant name="month">
          <DatePicker picker="month" />
        </Variant>
        <Variant name="quarter">
          <DatePicker picker="quarter" />
        </Variant>
        <Variant name="year">
          <DatePicker picker="year" />
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
          <Input addonBefore="http://" defaultValue="mysite" />
        </Variant>
        <Variant name="with postfix">
          <Input addonAfter=".com" defaultValue="mysite" />
        </Variant>
      </Component>
      <Component name="InputNumber">
        <Variant>
          <InputNumber min={0} max={10} defaultValue={5} />
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
      {/*
      <Component name="Select">
        <Variant>
          <Select defaultValue="lucy">
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              Disabled
            </Select.Option>
          </Select>
        </Variant>
      </Component>
      */}
    </Category>
    <Category name="Data Display">
      <Component name="Card">
        <Variant>
          <Card title="Card title" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Variant>
      </Component>
      <Component name="Table">
        <Variant>
          <Table dataSource={[{name: 'John', age: 30}, {name: 'Lucy', age: 31}]}
                 columns={[{title: 'Name', dataIndex:'name'}, {title: 'Age', dataIndex: 'age'}]} />;
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
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
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
            <Steps.Step title="Finished" />
            <Steps.Step title="In Progress" />
            <Steps.Step title="Waiting" />
          </Steps>
        </Variant>
      </Component>
    </Category>
  </Palette>
);
