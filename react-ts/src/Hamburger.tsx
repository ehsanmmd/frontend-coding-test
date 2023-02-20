import { memo, useCallback } from "react";
import styled from "styled-components";

const Burger = styled.div`
  display: none;
  cursor: poiner;
  position: absolute;
  bottom: 10px;
  right: 10px;

  @media only screen and (orientation: portrait) {
    display: block;
  }
`;

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #888;
`;

function Hamburger(props:{onClick:()=>void}) {
  return (
    <Burger onClick={props.onClick}>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
    </Burger>
  );
}

export default memo(Hamburger);
