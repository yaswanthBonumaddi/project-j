import React from "react";
import {
  Flex,
  Badge,
  Card,
  Table,
} from "antd";
import { Typography} from "antd";


const { Title, Paragraph } = Typography;
const Approvalsawaited = () => {
    const dataSourcetable2 = [
        {
          key: "1",
          Step: "1",
          "Project Name": "Project A",
          Requester: "John Doe",
          "Due Date": "2024-01-15",
        },
        {
          key: "2",
          Step: "2",
          "Project Name": "Project B",
          Requester: "Jane Smith",
          "Due Date": "2024-02-01",
        },
        {
          key: "3",
          Step: "3",
          "Project Name": "Project C",
          Requester: "Bob Johnson",
          "Due Date": "2024-01-20",
        },
        // Add more rows as needed
      ];
    
      const columnstable2 = [
        {
          title: "Step",
          dataIndex: "Step",
          key: "Step",
          render: (text: any) => (
            <Badge
              count={text}
              style={{ backgroundColor: "#E6F4FF", color: "#1677FF" }}
            />
          ),
          onHeaderCell: () => {
            return {
              style: {
                backgroundColor: "#ffffff", // Set background color for the Step column header
                borderRight: "0px solid #ffffff", // Set right border for the Step column
              },
            };
          },
        },
        {
          title: "Project Name",
          dataIndex: "Project Name",
          key: "Project Name",
          onHeaderCell: () => {
            return {
              style: {
                backgroundColor: "#ffffff", // Set background color for the Step column header
                borderRight: "0px solid #ffffff", // Set right border for the Step column
              },
            };
          },
        },
        {
          title: "Requester",
          dataIndex: "Requester",
          key: "Requester",
          onHeaderCell: () => {
            return {
              style: {
                backgroundColor: "#ffffff", // Set background color for the Step column header
                borderRight: "0px solid #ffffff", // Set right border for the Step column
              },
            };
          },
        },
        {
          title: "Due Date",
          dataIndex: "Due Date",
          key: "Due Date",
          onHeaderCell: () => {
            return {
              style: {
                backgroundColor: "#ffffff", // Set background color for the Step column header
                borderRight: "0px solid #ffffff", // Set right border for the Step column
              },
            };
          },
        },
      ];
  return (
    <Card
    headStyle={{ backgroundColor: "#F5F5F5", height: "68px" }}
    bodyStyle={{ padding: 0 }}
    style={{ width: "400px" }}
    title={
      <Flex
        gap={0}
        style={{ height: "50px", paddingBottom: "20px" }}
        justify="center"
        align="flex-start"
        vertical
      >
        <Title level={5}>Approvals awaited</Title>
        <Paragraph style={{ fontSize: "12px", opacity: "45%" }}>
          These are the approvals requested by you.{" "}
        </Paragraph>
      </Flex>
    }
  >
    <Table
      style={{ width: "100%" }}
      dataSource={dataSourcetable2}
      columns={columnstable2}
      pagination={false}
      size="small" // Set the size to 'small' to reduce the height of rows
    />
  </Card>
  )
}

export default Approvalsawaited