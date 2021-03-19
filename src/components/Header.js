import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
const Header = () => {
	return (
		<HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar />
                <AccessTimeIcon/>
            </HeaderLeft>
			{/* HeaderSearch */}
			<HeaderSearch>
			<SearchIcon/>
			<input placeholder="Search"/>
			</HeaderSearch>
			{/* HeaderRight */}
			<HeaderRight>
              <HelpOutlineIcon/>
			</HeaderRight>
		</HeaderContainer>
	);
};

export default Header;

const HeaderRight=styled.div`
flex:0.3;
display:flex;
align-items:flex-end;

>.MuiSvgIcon-root{
	margin-left:auto;
	margin-right:20px;
}

`
;
const HeaderSearch = styled.div`
 flex:0.4;
 display:flex;
 align-items:center;
 background-color:#421f44;
 border-radius:6px;
 padding: 0 50px;
 > input{
	 border:none;
	 background-color:transparent;
	 text-align:center;
	 min-width:30vw;
	 outline:0;
	 color:white;
	
 }
;`

const HeaderContainer = styled.div`
    color: red;
	display: flex;
	position: fixed;
	width: 100%;
	align-items:center;
	justify-content:space-between;
	padding:10px 0;
	background-color: var(--slack-color);
	color:white;
`;

const HeaderLeft = styled.div`
display:flex;
align-items:center;
flex:0.3;
margin-left: 20px;
> .MuiSvgIcon-root {
   margin-right:30px;
   margin-left: auto;
}

`;

const HeaderAvatar = styled(Avatar)`
cursor:pointer;
:hover{
	color: var(--slack-color);
	opacity:0.8;
}


`;
 

