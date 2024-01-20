import React, { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Flex,
  Typography,
  Space,
  Select,
} from "antd";
import { ModalFuncProps } from "antd/lib/modal";
import "../App.css";

import {
  CheckCircleOutlined,
  PlusOutlined,
  ArrowRightOutlined,
  ApartmentOutlined,
  CopyOutlined,
} from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const { Item } = Form;
const { Option } = Select;

const MyComponent: React.FC = () => {
  const [modalTitle, setModalTitle] = useState("Create a new space");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showbtns, setShowbtns] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [congrates, setCongrates] = useState(false);

  const [formData, setFormData] = useState({
    spaceName: "",
    ownerAccount: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [form] = Form.useForm<{ spaceName: string; ownerAccount: string }>();
  const spaceName = Form.useWatch("spaceName", form);

  const [selectedOwnerAccount, setSelectedOwnerAccount] = useState<string | undefined>(undefined);

  const showModal = () => {
    setIsModalVisible(true);
    setShowbtns(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowForm(false);
    setSuccessMessage("");
    setCongrates(false);
    setModalTitle("Create a new space");
  };

  const handleFormSubmit = (values: any) => {
    // Handle form submission logic here
    console.log("Form values:", values);
    console.log(spaceName, selectedOwnerAccount);
  };

  const handleFormValuesChange = (changedValues: any, allValues: any) => {
    // Handle form values change logic here if needed
    console.log("Changed values:", changedValues);
    console.log("All values:", allValues);
  };

  const ownerAccount = Form.useWatch("ownerAccount", form);

  const handleProvinceChange = (value: string) => {
    form.setFieldsValue({
      ownerAccount: value,
    });
  };

  // const handleProvinceChange = (value: any) => {
  //   setSelectedOwnerAccount(value);
  // };

  const handleButtonSelect = (buttonNumber: string) => {
    if (buttonNumber === "1") {
      setIsModalVisible(true);
      setShowForm(true);
      setModalTitle("Create a blank space");
    } else {
      setIsModalVisible(true);
      setShowForm(false);
      setSuccessMessage("Congratulations! Data submitted successfully");
      // Reset the form if needed
      setFormData({
        spaceName: "",
        ownerAccount: "",
      });
      setModalTitle("Create a new space");
    }
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        centered
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        title={modalTitle}
      >
        {!showForm ? (
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
                <Flex gap={10} align="center" justify="center">
                  <Button
                    style={{ backgroundColor: "#E6F4FF", color: "#1677FF" }}
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                    onClick={() => handleButtonSelect("1")}
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
                <Flex gap={10} align="center" justify="center">
                  <Button
                    style={{ backgroundColor: "#E6F4FF", color: "#1677FF" }}
                    type="primary"
                    shape="circle"
                    icon={<CopyOutlined />}
                  />
                  <p>Organisation Configuration</p>
                </Flex>
              </Flex>
            </div>
          </Flex>
        ) : (
          <Form form={form}
            layout="vertical"
            onFinish={handleFormSubmit}
            initialValues={formData}
            onValuesChange={handleFormValuesChange}
          >
           
            {/* <Form.Item
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
              id="ownerAccount"
              rules={[{ required: true, message: "Owner Account is required" }]}
            >
              <div>
                <Select
                  placeholder="Select Owner Account"
                  onChange={handleProvinceChange}
                  value={selectedOwnerAccount} // Set the value of the Select based on state
                >
                  <Option value="owner1">Owner 1</Option>
                  <Option value="owner2">Owner 2</Option>
                </Select>
                <Paragraph>
                  Select the owner account you want to use to create this space.
                </Paragraph>
              </div>
            </Form.Item> */}
 <Form.Item
        label="Space Name"
        name="spaceName"
        rules={[{ required: true, message: "Space Name is required" }]}
      >
        <Input placeholder="Enter Space Name" />
        <Paragraph>Enter the name you want to give to your space.</Paragraph>
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
            value={ownerAccount}
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
    </div>
  );
};

export default MyComponent;

// ==================================================================================================

// import React, { useState } from "react";
// import {
//   Button,
//   Modal,
//   Input,
//   Form,
//   Flex,
//   Typography,
//   Space,
//   Select,
// } from "antd";
// import "../App.css";

// import { PlusOutlined, CopyOutlined } from "@ant-design/icons";
// const { Paragraph } = Typography;
// const { Option } = Select;

// const MyComponent: React.FC = () => {
//   const [modalTitle, setModalTitle] = useState("Create a new space");

//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [showbtns, setShowbtns] = useState(false);

//   const [showForm, setShowForm] = useState(false);
//   const [congrates, setCongrates] = useState(false);

//   const [formData, setFormData] = useState({
//     field1: "",
//     field2: "",
//   });

//   const [successMessages, setSuccessMessages] = useState<string[]>([]);

//   const showModal = () => {
//     setIsModalVisible(true);
//     setShowbtns(true);
//   };

//   const handleButtonSelect = (buttonNumber: string) => {
//     if (buttonNumber === "1") {
//       setIsModalVisible(true);
//       setShowForm(true);
//       setModalTitle("Create a blank space");
//     } else {
//       setIsModalVisible(true);
//       setShowForm(false);
//       setSuccessMessages(["Congratulations! Data submitted successfully"]);
//       // Reset the form if needed
//       setFormData({
//         field1: "",
//         field2: "",
//       });
//       setModalTitle("Create a new space");
//     }
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     setShowForm(false);
//     setSuccessMessages([]);
//     setCongrates(false);
//     setModalTitle("Create a new space");
//   };

//   const handleFormSubmit = (values: any) => {
//     // Handle form submission logic here
//     console.log("Form values:", values);

//     // Store the form data in the array
//     setSuccessMessages([
//       ...successMessages,
//       "Congratulations! Data submitted successfully",
//     ]);

//     // Reset the form if needed
//     setFormData({
//       field1: "",
//       field2: "",
//     });

//     // Show the congratulations screen
//     setCongrates(true);
//     setShowForm(false);
//     setModalTitle("Congratulations!");
//   };

//   return (
//     <div>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal
//         centered
//         open={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//         title={modalTitle}
//       >
//         {congrates ? (
//           <div>
//             {successMessages.map((message, index) => (
//               <div key={index}>{message}</div>
//             ))}
//           </div>
//         ) : !showForm ? (
//           <Flex align="flex-start" justify="flex-start" gap={20} wrap="wrap">
//             <div>
//               <Flex
//                 gap={40}
//                 align="center"
//                 justify="center"
//                 style={{
//                   border: "#F0F0F0 1px solid",
//                   borderRadius: "10px",
//                   paddingLeft: "10px",
//                   paddingRight: "10px",
//                 }}
//               >
//                 <Flex gap={10} align="center" justify="center">
//                   <Button
//                     style={{ backgroundColor: "#E6F4FF", color: "#1677FF" }}
//                     type="primary"
//                     shape="circle"
//                     icon={<PlusOutlined />}
//                     onClick={() => handleButtonSelect("1")}
//                   />
//                   <p>Create a new space</p>
//                 </Flex>
//               </Flex>
//             </div>
//             <div>
//               <Flex
//                 gap={40}
//                 align="center"
//                 justify="center"
//                 style={{
//                   border: "#F0F0F0 1px solid",
//                   borderRadius: "10px",
//                   paddingLeft: "10px",
//                   paddingRight: "10px",
//                 }}
//               >
//                 <Flex gap={10} align="center" justify="center">
//                   <Button
//                     style={{ backgroundColor: "#E6F4FF", color: "#1677FF" }}
//                     type="primary"
//                     shape="circle"
//                     icon={<CopyOutlined />}
//                   />
//                   <p>Organisation Configuration</p>
//                 </Flex>
//               </Flex>
//             </div>
//           </Flex>
//         ) : (
//           <Form layout="vertical" onFinish={handleFormSubmit}>
//             <Form.Item
//               label="Space Name"
//               name="spaceName"
//               rules={[{ required: true, message: "Space Name is required" }]}
//             >
//               <Input placeholder="Enter Space Name" />
//               <Paragraph>
//                 Enter the name you want to give to your space.
//               </Paragraph>
//             </Form.Item>

//             <Form.Item
//               label="Owner Account"
//               name="ownerAccount"
//               rules={[{ required: true, message: "Owner Account is required" }]}
//             >
//               <Select placeholder="Select Owner Account">
//                 <Option value="owner1">Owner 1</Option>
//                 <Option value="owner2">Owner 2</Option>
//               </Select>
//               <Paragraph>
//                 Select the owner account you want to use to create this space.
//               </Paragraph>
//             </Form.Item>

//             <Form.Item>
//               <Space>
//                 <Button type="primary" htmlType="submit">
//                   Create Space
//                 </Button>
//                 <Button type="default" onClick={() => handleCancel()}>
//                   Cancel
//                 </Button>
//               </Space>
//             </Form.Item>
//           </Form>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default MyComponent;
// // //=====================================================================

// import React, { useState } from "react";
// import { Button, Modal, Input, Form, Flex, Typography, Space, Select } from "antd";
// import { PlusOutlined, CopyOutlined } from "@ant-design/icons";
// import "../App.css";

// const { Paragraph } = Typography;
// const { Option } = Select;

// const CustomButton = ({ onClick, icon, text, style }:{onClick:any,icon:any,text:any,style?:any}) => (
//   <Flex
//     gap={40}
//     align="center"
//     justify="center"
//     style={{
//       border: "#F0F0F0 1px solid",
//       borderRadius: "10px",
//       paddingLeft: "10px",
//       paddingRight: "10px",
//       ...style,
//     }}
//   >
//     <Flex gap={10} align="center" justify="center">
//       <Button
//         style={{ backgroundColor: "#E6F4FF", color: "#1677FF" }}
//         type="primary"
//         shape="circle"
//         icon={icon}
//         onClick={onClick}
//       />
//       <p>{text}</p>
//     </Flex>
//   </Flex>
// );

// const MyComponent: React.FC = () => {
//   const [modalTitle, setModalTitle] = useState("Create a new space");
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [congratulations, setCongratulations] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ field1: "", field2: "" });
//   const [successMessages, setSuccessMessages] = useState<string[]>([]);

//   const showModal = () => {
//     setIsModalVisible(true);
//     setShowForm(true);
//     setModalTitle("Create a blank space");
//   };

//   const handleButtonSelect = (buttonNumber: string) => {
//     setIsModalVisible(true);
//     setShowForm(buttonNumber === "1");
//     setModalTitle(buttonNumber === "1" ? "Create a blank space" : "Create a new space");
//     setSuccessMessages([]);
//     setFormData({ field1: "", field2: "" });
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     setShowForm(false);
//     setCongratulations(false);
//     setModalTitle("Create a new space");
//   };

//   const handleFormSubmit = (values: any) => {
//     console.log("Form values:", values);

//     setSuccessMessages(["Congratulations! Data submitted successfully"]);
//     setFormData({ field1: "", field2: "" });
//     setCongratulations(true);
//     setShowForm(false);
//     setModalTitle("Congratulations!");
//   };

//   return (
//     <div>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal
//         centered
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//         title={modalTitle}
//       >
//         {congratulations ? (
//           <div>
//             {successMessages.map((message, index) => (
//               <div key={index}>{message}</div>
//             ))}
//           </div>
//         ) : !showForm ? (
//           <Flex align="flex-start" justify="flex-start" gap={20} wrap="wrap">
//             <CustomButton
//               onClick={() => handleButtonSelect("1")}
//               icon={<PlusOutlined />}
//               text="Create a new space"
//             />
//             <CustomButton
//               onClick={() => handleButtonSelect("2")}
//               icon={<CopyOutlined />}
//               text="Organisation Configuration"
//             />
//           </Flex>
//         ) : (
//           <Form layout="vertical" onFinish={handleFormSubmit} initialValues={formData}>
//             <Form.Item
//               label="Space Name"
//               name="field1"
//               rules={[{ required: true, message: "Space Name is required" }]}
//             >
//               <Input placeholder="Enter Space Name" />
//               <Paragraph>Enter the name you want to give to your space.</Paragraph>
//             </Form.Item>

//             <Form.Item
//               label="Owner Account"
//               name="field2"
//               rules={[{ required: true, message: "Owner Account is required" }]}
//             >
//               <Select placeholder="Select Owner Account">
//                 <Option value="owner1">Owner 1</Option>
//                 <Option value="owner2">Owner 2</Option>
//               </Select>
//               <Paragraph>Select the owner account you want to use to create this space.</Paragraph>
//             </Form.Item>

//             <Form.Item>
//               <Space>
//                 <Button type="primary" htmlType="submit">
//                   Create Space
//                 </Button>
//                 <Button type="default" onClick={handleCancel}>
//                   Cancel
//                 </Button>
//               </Space>
//             </Form.Item>
//           </Form>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default MyComponent;



