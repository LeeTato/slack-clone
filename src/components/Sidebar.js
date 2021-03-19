// import { styled } from '@material-ui/core';
import styled from "styled-components";
import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Sidebar() {
    return (
    <SidebarContainer>
       <SidebarHeader>
         <SidebarInfo>
         <h2>Group 2</h2>
          <h3> 
    <FiberManualRecordIcon/>
     Lina
     </h3>
          </SidebarInfo>
          <CreateIcon/>
       
        </SidebarHeader>
    </SidebarContainer>
    );
}

export default Sidebar;


const SidebarContainer = styled.div`
  flex: 0.3;
  background-color: var(--slack-color);
  color: white;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  
`;
const SidebarHeader = styled.div`
display: flex;
border-bottom:1px solid #49274b;
padding:13px;

>.MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
    justify-content: space-between;
}
`;
const SidebarInfo = styled.div`
>h2{
font-size: 15px;
font-weight: 900;
margin-bottom: 5px;
}
>h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}
`;

