import React from "react";
import {
  Flex,
  Card,
  Table,
  Select,
  Tabs,
} from "antd";
import { Typography } from "antd";
import {
  ArrowUpOutlined,
  InfoCircleOutlined,
  FileTextOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Reports = () => {
    const documentsData = [
        { no: 1, name: "Proposal.docx", views: 25 },
        { no: 2, name: "Marketing Plan.pdf", views: 18 },
        { no: 3, name: "Budget.xlsx", views: 37 },
        { no: 4, name: "Product Requirements.txt", views: 9 },
        { no: 5, name: "Meeting Minutes.docx", views: 42 },
      ];
    
      const usersData = [
        { no: 1, name: "John Doe", downloads: 12 },
        { no: 2, name: "Jane Smith", downloads: 5 },
        { no: 3, name: "Peter Lee", downloads: 28 },
        { no: 4, name: "Emily Johnson", downloads: 15 },
        { no: 5, name: "David Miller", downloads: 7 },
      ];
  return (
    <Card
    headStyle={{ backgroundColor: "#F5F5F5", height: "68px" }}
    bodyStyle={{ padding: 0 }}
    style={{ width: "400px" }}
    title={
      <div style={{ height: "50px", display: "table", width: "100%" }}>
        <Flex
          gap={0}
          style={{
            height: "50px",
            paddingBottom: "20px",
            display: "table-row",
          }}
          justify="space-between"
        >
          <Title
            level={5}
            style={{
              marginBottom: 0,
              display: "table-cell",
              verticalAlign: "middle",
            }}
          >
            Reports
          </Title>
          <Select
            size="small"
            defaultValue="30 days"
            style={{
              width: 120,
              display: "table-cell",
              verticalAlign: "middle",
            }}
            options={[
              { value: "30 days", label: "30 days" },
              { value: "6 months", label: "6 months" },
              { value: "1 year", label: "1 year" },
            ]}
          />
        </Flex>
      </div>
    }
  >
    <Flex
      align="center"
      justify="space-around"
      wrap="wrap"
      style={{ width: "100%", margin: "10px 0px 10px 0px" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Flex
          justify="center"
          align="center"
          style={{
            border: "#F0F0F0 1px solid",
            borderRadius: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          vertical
        >
          <Flex
            gap={10}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Paragraph style={{ marginBottom: 0 }}>
              Number of unique users
            </Paragraph>
          </Flex>
          <Flex
            style={{ width: "100%" }}
            justify="space-between"
            align="center" 
          >
            <Paragraph style={{ marginBottom: 0 }}>8</Paragraph>
            <Flex style={{ width: "100%" }} gap={5} justify="flex-end">
              <ArrowUpOutlined style={{ color: "#52C41A" }} />
              <Paragraph
                style={{
                  lineHeight: "1",
                  marginBottom: 0,
                  color: "#52C41A",
                }}
              >
                18%
              </Paragraph>
              <InfoCircleOutlined />
            </Flex>
          </Flex>
        </Flex>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Flex
          justify="center"
          align="center"
          style={{
            border: "#F0F0F0 1px solid",
            borderRadius: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          vertical
        >
          <Flex
            gap={10}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Paragraph style={{ marginBottom: 0 }}>
              Total number of viewers
            </Paragraph>
          </Flex>
          <Flex
            style={{ width: "100%" }}
            justify="space-between"
            align="center" 
          >
            <Paragraph style={{ marginBottom: 0 }}>8</Paragraph>
            <Flex style={{ width: "100%" }} gap={5} justify="flex-end">
              <ArrowUpOutlined style={{ color: "#52C41A" }} />
              <Paragraph
                style={{
                  lineHeight: "1",
                  marginBottom: 0,
                  color: "#52C41A",
                }}
              >
                18%
              </Paragraph>
              <InfoCircleOutlined />
            </Flex>
          </Flex>
        </Flex>
      </div>
    </Flex>
    <Tabs
      style={{
        margin: "10px",
        border: "1px #F0F0F0 solid",
        borderRadius: "10px",
        padding: 0,
      }}
      centered
      size="small"
      defaultActiveKey="1"
      items={[
        {
          label: "Documents",
          key: "1",
          children: (
            <Table
              size="small"
              pagination={false}
              dataSource={documentsData}
              columns={[
                { title: "No", dataIndex: "no", key: "no" },
                {
                  title: "Document Name",
                  dataIndex: "name",
                  key: "name",
                },
                { title: "Views", dataIndex: "views", key: "views" },
              ]}
              style={{ padding: 0, margin: "0px" }}
            />
          ),
          icon: <FileTextOutlined />,
        },
        {
          label: "Users",
          key: "2",
          children: (
            <Table
              size="small"
              pagination={false}
              dataSource={usersData}
              columns={[
                { title: "No", dataIndex: "no", key: "no" },
                { title: "User Name", dataIndex: "name", key: "name" },
                {
                  title: "Downloads",
                  dataIndex: "downloads",
                  key: "downloads",
                },
              ]}
              style={{ padding: 0, margin: 0 }}
            />
          ),
          icon: <UserOutlined />,
        },
      ]}
    />
  </Card>
  )
}

export default Reports