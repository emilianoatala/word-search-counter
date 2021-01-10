import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width:${props => props.radius};
    height:${props => props.radius};
    border-radius: 50%;
    border:${props => props.border || "none"};
    background-color:${props => props.active === "true" ? props.activeColor : props.color};
    box-shadow: ${props => props.elevation === "true" ? "5px 5px 15px 2px rgba(0,0,0,0.27)" : "unset" } ;
    outline:none;
    cursor:pointer;
`

const CircularButton = ({ children, action, radius, color, active, activeColor, elevation, border }) => {
    return ( 
        <Container
            onClick={action}
            radius={radius || "20px"}
            color={color || "white"}
            active={active}
            activeColor={activeColor || "white"}
            elevation={elevation}
            border={border}
        >
            {children}
        </Container>
     );
}
 
export default CircularButton;