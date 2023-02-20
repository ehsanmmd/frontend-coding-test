import { memo } from "react";
import styled from "styled-components";

const SidebarArea = styled.div`
  position: absolute;
  right: 0;
  height: 60vh;
  margin-top: 15px;
  margin-right: 15px;
  width: 55%;
  background: #999;
  border-radius: 10px;
  z-index: 100;
`;

function Sidebar() {
  return <SidebarArea></SidebarArea>;
}

export default memo(Sidebar);
