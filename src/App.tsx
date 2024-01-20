import React from "react";
import {
  Button,
  Flex,
  Tag,
  Input,
} from "antd";
import { Typography, Space } from "antd";
import SpaceCard from "./components/SpaceCard";
import {
  ArrowRightOutlined,
  ApartmentOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import CreateNewSpace from "./components/Model"
import ApprovalsPending from "./components/ApprovalsPending"
import Approvalsawaited from "./components/Approvalsawaited"
import Notifications from "./components/Notifications";
import Reports from "./components/Reports"
import "./App.css";
const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div>
        <Title className="admin_head" level={3}>
          Welcome Admin!
        </Title>
      </div>
      <Title level={4}>Admin Controls</Title>
      <Space>
        <Flex align="flex-start" justify="flex-start" gap={20} wrap="wrap">
        < CreateNewSpace />
          <div>
            <Flex
              gap={40}
              align="center"
              justify="center"
              style={{
                border: "#F0F0F0 1px solid",
                borderRadius: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
                cursor: "pointer"
              }}
            >
              <Flex gap={10} align="center" justify="center">
                <Button
                  style={{ backgroundColor: "#E6F4FF", color: "#1677FF" }}
                  type="primary"
                  shape="circle"
                  icon={<ApartmentOutlined />}
                />
                <p>Organisation Configuration</p>
              </Flex>
              <ArrowRightOutlined />
            </Flex>
          </div>
        </Flex>
      </Space>
      <div>
        <Title style={{ fontSize: "20px" }} level={4}>
          Your Activities
        </Title>
      </div>
      <div>
        <Flex wrap="wrap" gap={20}>
          <ApprovalsPending/>
          <Approvalsawaited/>
          <Notifications/>
          <Reports/>
        </Flex>
      </div>
      <Flex
        align="center"
        justify="space-between"
        style={{ marginBottom: "20px" }}
      >
        <Flex
          align="center"
          justify="flex-start"
          gap={20}
          style={{
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px",
            height: "32px",
          }}
        >
          <Title level={3}>Your Spaces</Title>
          <Tag color="magenta">Tag 1</Tag>
        </Flex>
        <Flex
          align="center"
          justify="flex-start"
          gap={20}
          style={{
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px",
            height: "32px",
          }}
        >
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Input
                placeholder="Search a space"
                allowClear
                // onChange={(e) => onSearch(e.target.value)}
                suffix={<SearchOutlined style={{ marginRight: "8px" }} />}
              />
            </Space>
          </div>
          <Paragraph color="magenta">View all</Paragraph>
        </Flex>
      </Flex>
      <Flex gap={20}>
        <SpaceCard />
      </Flex>
    </div>
  );
};

export default App;
