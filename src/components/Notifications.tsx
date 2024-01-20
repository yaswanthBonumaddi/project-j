import React from "react";
import { Flex, Card } from "antd";
import { Typography } from "antd";
import { List } from "antd";
import { NotificationOutlined, ClockCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Text } = Typography;

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      icon: <NotificationOutlined />,
      message: "New message received",
      timeAgo: "22hr ago",
    },
    {
      id: 2,
      icon: <NotificationOutlined />,
      message: "You have a meeting at 2:00 PM",
      timeAgo: "15min ago",
    },
    {
      id: 3,
      icon: <NotificationOutlined />,
      message: "You have a meeting at 2:00 PM",
      timeAgo: "15min ago",
    },
    {
      id: 4,
      icon: <NotificationOutlined />,
      message: "You have a meeting at 2:00 PM",
      timeAgo: "15min ago",
    },
    // Add more notifications as needed
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
              Notifications
            </Title>
            <Paragraph
              style={{
                fontSize: "12px",
                color: "#1677FF",
                display: "table-cell",
                verticalAlign: "middle",
                textAlign: "right",
              }}
            >
              Mark as read
            </Paragraph>
          </Flex>
        </div>
      }
    >
      <List
        size="small"
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item
            style={{ padding: "6px", borderBottom: "1px solid #f0f0f0" }}
          >
            <List.Item.Meta
              avatar={<ClockCircleOutlined />}
              title={<Text style={{ fontSize: "13px" }}>{item.message}</Text>}
            />
            <Text type="secondary" style={{ fontSize: "11px" }}>
              {item.timeAgo}
            </Text>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Notifications;
