import React, { useState } from "react";
import { ChangeEvent } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Flex,
  Typography,
  Space,
  Select,
  Steps,
  Checkbox,
} from "antd";
import "../App.css";
import {
  PlusOutlined,
  CopyOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";

const { Paragraph } = Typography;
const { Option } = Select;

const CreateNewSpace: React.FC = () => {
  const [modalTitle, setModalTitle] = useState("Create a new space");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [congrates, setCongrates] = useState(false);
  const [showsteps, setShowsteps] = useState(false);
  const [showcopyspaceform, setShowcopyspaceform] = useState(false);
  const [showcopyspacechecks, setShowcopyspacechecks] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [form] = Form.useForm<{ spaceName: string; ownerAccount: string }>();
  const [form2] = Form.useForm<{ spaceName: string; textArea: string }>();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowForm(false);
    setSuccessMessage("");
    setCongrates(false);
    setModalTitle("Create a new space");
    setShowsteps(false);
    setShowcopyspaceform(false);
    setShowcopyspacechecks(false);
  };

  const handleFormSubmit = (values: any) => {
    console.log("Form values:", values);
    form.resetFields();
    setSuccessMessage("The space has successfully been created.");
    setCongrates(true);
    setModalTitle("");
  };

  const handleCopyFormSubmit = (values: any) => {
    console.log("Form values:", values);
    form2.resetFields();
    setShowcopyspacechecks(true);
    setShowcopyspaceform(false);
  };

  const handleButtoncheckSubmit = () => {
    setCongrates(true);
    setSuccessMessage("The space has successfully been created.");
    setShowcopyspacechecks(false)
    setModalTitle("");
  };

  const handleCopySpaceProvinceChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    form2.setFieldsValue({
      textArea: e.target.value,
    });
  };
  const handleProvinceChange = (value: string) => {
    form.setFieldsValue({
      ownerAccount: value,
    });
  };

  const handleButtonCreateSpace = () => {
    setIsModalVisible(true);
    setShowForm(true);
    setModalTitle("Create a blank space");
  };

  const handleButtonCopySpace = () => {
    setIsModalVisible(true);
    setShowsteps(true);
    setModalTitle("Copy existing space");
  };

  const handleButtonCopySpaceForm = () => {
    setIsModalVisible(true);
    setShowcopyspaceform(true);
    setModalTitle("Copy existing space");
    setShowsteps(false);
  };

  const options = [
    { label: "Sharings", value: "Sharings" },
    { label: "Workflow", value: "Workflow" },
    { label: "Designer", value: "Designer" },
    { label: "Conditions", value: "Conditions" },
    { label: "Notifications", value: "Notifications" },
    { label: "Rules", value: "Rules" },
  ];

  return (
    <>
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
            cursor: "pointer",
          }}
          onClick={showModal}
        >
          <Flex gap={10} align="center" justify="center">
            <Button
              style={{ backgroundColor: "#E6F4FF", color: "#1677FF" }}
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
            />
            <p>Create a new space</p>
          </Flex>
          <ArrowRightOutlined />
        </Flex>
      </div>
      <Modal
        centered
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        title={modalTitle}
      >
        {congrates ? (
          <Flex vertical align="center">
            <CheckCircleFilled style={{ color: "#52C41A", fontSize: "63px" }} />
            <Typography.Title level={4}>Congratulations!</Typography.Title>
            <Typography.Paragraph style={{ opacity: "45%" }}>
              {successMessage}
            </Typography.Paragraph>
            <Flex gap={10}>
              <Button type="primary" onClick={handleCancel}>
                Take me to space
              </Button>
              <Button type="default" onClick={handleCancel}>
                Close
              </Button>
            </Flex>
          </Flex>
        ) : showsteps ? (
          <Flex gap={10} vertical align="flex-start">
            <Steps
              progressDot
              current={0}
              items={[
                {
                  title: "Select Space",
                },
                {
                  title: "General Details",
                },
                {
                  title: "Copy Details",
                },
              ]}
            />{" "}
            <label htmlFor="mySelect">Select space to copy</label>
            <Select
              id="mySelect"
              defaultValue="lucy"
              style={{ width: "100%" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
            <Flex justify="flex-end" gap={10} style={{ width: "100%" }}>
              <Button
                style={{ textAlign: "left" }}
                type="default"
                onClick={handleCancel}
              >
                Close
              </Button>
              <Button
                style={{ textAlign: "left" }}
                type="default"
                onClick={handleButtonCopySpaceForm}
              >
                Next
              </Button>
            </Flex>
          </Flex>
        ) : showcopyspaceform ? (
          // Only show the content for "Copy existing space" button
          <Flex gap={10} vertical align="flex-start">
            <Steps
              progressDot
              current={1}
              items={[
                {
                  title: "Select Space",
                },
                {
                  title: "General Details",
                },
                {
                  title: "Copy Details",
                },
              ]}
            />
            <Form
              form={form}
              layout="vertical"
              onFinish={handleCopyFormSubmit}
              style={{ width: "100%" }}
            >
              <Form.Item
                label="Space Name"
                name="spaceName"
                id="spaceName"
                rules={[{ required: true, message: "Space Name is required" }]}
              >
                <div>
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Enter Space Name"
                  />
                  <Paragraph>
                    Enter the name you want to give to your space.
                  </Paragraph>
                </div>
              </Form.Item>

              <Form.Item label="Space Description" name="textArea">
                <Input.TextArea
                  onChange={handleCopySpaceProvinceChange}
                  rows={2}
                />
              </Form.Item>
              <Form.Item style={{ width: "100%" }}>
                <Flex justify="flex-end" gap={10} style={{ width: "100%" }}>
                  <Button
                    style={{ textAlign: "left" }}
                    type="default"
                    onClick={handleCancel}
                  >
                    Close
                  </Button>
                  <Button
                    style={{ textAlign: "left" }}
                    type="primary"
                    htmlType="submit"
                  >
                    Next
                  </Button>
                </Flex>
              </Form.Item>
            </Form>
          </Flex>
        ) : showcopyspacechecks ? (
          // Only show the content for "Copy existing space" button
          <Flex gap={10} vertical align="flex-start">
            <Steps
              progressDot
              current={2}
              items={[
                {
                  title: "Select Space",
                },
                {
                  title: "General Details",
                },
                {
                  title: "Copy Details",
                },
              ]}
            />
            <Paragraph>Select what needs to be copied in new space *</Paragraph>

            <Checkbox.Group options={options} defaultValue={["Pear"]} />
            <Flex justify="flex-end" gap={10} style={{ width: "100%" }}>
                  <Button
                    style={{ textAlign: "left" }}
                    type="default"
                    onClick={handleCancel}
                  >
                    Back
                  </Button>
                  <Button
                    style={{ textAlign: "left" }}
                    type="primary"
                    onClick={handleButtoncheckSubmit}
                  >
                    Copy Space
                  </Button>
                </Flex>
            <br />
          </Flex>
        ) : !showForm ? (
          <Flex align="flex-start" justify="flex-start" gap={20} wrap="wrap">
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
                }}
              >
                <Flex
                  gap={10}
                  align="center"
                  justify="center"
                  onClick={() => handleButtonCreateSpace()}
                  style={{ cursor: "pointer" }}
                >
                  <Button
                    style={{ backgroundColor: "#E6F4FF", color: "#1677FF" }}
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                  />
                  <p>Create a new space</p>
                </Flex>
              </Flex>
            </div>
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
                }}
              >
                <Flex
                  gap={10}
                  align="center"
                  justify="center"
                  onClick={() => handleButtonCopySpace()}
                  style={{ cursor: "pointer" }}
                >
                  <Button
                    style={{ backgroundColor: "#E6F4FF", color: "#1677FF" }}
                    type="primary"
                    shape="circle"
                    icon={<CopyOutlined />}
                  />
                  <p>Copy existing space</p>
                </Flex>
              </Flex>
            </div>
          </Flex>
        ) : (
          <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
            <Form.Item
              label="Space Name"
              name="spaceName"
              id="spaceName"
              rules={[{ required: true, message: "Space Name is required" }]}
            >
              <div>
                <Input placeholder="Enter Space Name" />
                <Paragraph>
                  Enter the name you want to give to your space.
                </Paragraph>
              </div>
            </Form.Item>

            <Form.Item
              label="Owner Account"
              name="ownerAccount"
              rules={[{ required: true, message: "Owner Account is required" }]}
            >
              <div>
                <Select
                  placeholder="Select Owner Account"
                  onChange={handleProvinceChange}
                  // value={ownerAccount}
                >
                  <Option value="owner1">Owner 1</Option>
                  <Option value="owner2">Owner 2</Option>
                </Select>
                <Paragraph>
                  Select the owner account you want to use to create this space.
                </Paragraph>
              </div>
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Create Space
                </Button>
                <Button type="default" onClick={() => handleCancel()}>
                  Cancel
                </Button>
              </Space>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default CreateNewSpace;
