// import React from "react";
// import { Card, Divider, Badge, Typography, Button } from "antd";
// import space from "../asserts/space.jpeg";
// import {
//   UsergroupAddOutlined,
//   UserOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";

// const { Meta } = Card;
// const { Title, Paragraph } = Typography;

// const SpaceCard = () => {
//   return (
//     <Card
//       hoverable
//       style={{ width: "256px" }}
//       bodyStyle={{ padding: 8 }} // Added to reduce padding in the body
//       cover={
//         <div
//           style={{
//             height: "128px",
//             width: "100%",
//             padding: "5px",
//             boxSizing: "border-box",
//           }}
//         >
//           <img
//             src={space}
//             alt="space"
//             style={{
//               display: "block",
//               marginLeft: "auto",
//               marginRight: "auto",
//               marginBottom: 0,
//               height: "100%", // Adjusted height to fill the available space
//               width: "100%", // Adjusted width to fill the available space
//               objectFit: "contain", // Adjusted objectFit to fit the image within the container while maintaining aspect ratio
//             }}
//           />
//         </div>
//       }
//     >
//       <Divider style={{ margin: "5px 0" }} />
//       {/* border:"1px solid #000000" */}
//       <div style={{ padding: "5px" }}>
//         <Meta
//           title="Test PVR"
//           description="Dedicated space for Project Validation Request"
//         />
//         <Divider style={{ margin: "5px 0" }} />
//         <Button
//           style={{ margin: "0 2px 0 0" }}
//           type="text"
//           icon={<UsergroupAddOutlined />}
//         >
//           320
//         </Button>
//         <Divider type="vertical" style={{ margin: "0 2px" }} />
//         <Button
//           type="text"
//           icon={<UserOutlined />}
//           style={{ margin: "0 2px 0 0" }}
//         >
//           320
//         </Button>
//         <Divider type="vertical" style={{ margin: "0 2px" }} />
//         <Button type="text" icon={<SettingOutlined />} />
//       </div>
//     </Card>
//   );
// };

// export default SpaceCard;

import React, { useState } from "react";
import { Card, Divider, Button } from "antd";
import {
  UsergroupAddOutlined,
  UserOutlined,
  SettingOutlined,
  StarFilled,
} from "@ant-design/icons";
import space from "../asserts/space.jpeg";

const { Meta } = Card;

const SpaceCard = () => {
  const [isStarClicked, setIsStarClicked] = useState(false);

  const handleStarClick = () => {
    setIsStarClicked(!isStarClicked);
  };

  return (
    <Card
      hoverable
      style={{ width: "256px" }}
      bodyStyle={{ padding: 8 }} // Added to reduce padding in the body
      cover={
        <div
          style={{
            height: "128px",
            width: "100%",
            padding: "5px",
            boxSizing: "border-box",
          }}
        >
          <img
            src={space}
            alt="space"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 0,
              height: "100%", // Adjusted height to fill the available space
              width: "100%", // Adjusted width to fill the available space
              objectFit: "contain", // Adjusted objectFit to fit the image within the container while maintaining aspect ratio
            }}
          />
          <Button
          shape="circle"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={handleStarClick}
          >
            <StarFilled
              style={{ color: isStarClicked ? "#FFC53D" : "black" }}
            />
          </Button>
        </div>
      }
    >
      <Divider style={{ margin: "5px 0" }} />
      <div style={{ padding: "5px" }}>
        <Meta
          title="Test PVR"
          description="Dedicated space for Project Validation Request"
        />
        <Divider style={{ margin: "5px 0" }} />
        <Button
          style={{ margin: "0 2px 0 0" }}
          type="text"
          icon={<UsergroupAddOutlined />}
        >
          320
        </Button>
        <Divider type="vertical" style={{ margin: "0 2px" }} />
        <Button
          type="text"
          icon={<UserOutlined />}
          style={{ margin: "0 2px 0 0" }}
        >
          320
        </Button>
        <Divider type="vertical" style={{ margin: "0 2px" }} />
        <Button type="text" icon={<SettingOutlined />} />
      </div>
    </Card>
  );
};

export default SpaceCard;
