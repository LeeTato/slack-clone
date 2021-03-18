import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
const Header = () => {
	return (
		<HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar />
                <AccessTimeIcon/>
            </HeaderLeft>
			{/* HeaderSearch */}
			{/* HeaderRight */}
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.div`
	display:flex;
`;

const HeaderLeft = styled.div`
	display: flex;
    
`;

const HeaderAvatar = styled(Avatar)``;



