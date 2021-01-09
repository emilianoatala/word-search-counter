import styled from 'styled-components';

export const Wrapper = styled.div`
    width:${props=>props.width || "auto"};
    display: flex;
    flex-direction: ${props=> props.direction || "row"};
    justify-content: ${props => props.direction
        ? props.direction === "column" ? props.verticalAlign || "flex-start" : props.horizontalAlign || "flex-start"
        : props.horizontalAlign || "flex-start"
    };
    align-items: ${props => props.direction
        ? props.direction === "column" ? props.horizontalAlign || "flex-start" : props.verticalAlign || "flex-start" 
        : props.verticalAlign || "flex-start"
    };
    padding:${props => props.padding || 0};
    box-shadow:${props => props.shadow || "unset"};
    border-radius:${props => props.radius || "unset"};
    
`