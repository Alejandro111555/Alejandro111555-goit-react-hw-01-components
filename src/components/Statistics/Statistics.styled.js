import styled from "styled-components";
import { getRandomHexColor } from "utils/getRandomColor";



export const StatList = styled.ul`
display: flex;
margin-top: ${p => p.theme.space[16]}
`

export const StatItem = styled.li`
width: 50px;
display: flex;
flex-direction: column;
align-items: center;
padding: ${p => p.theme.space[8]};
background-color: ${getRandomHexColor};
border-radius: ${p => p.theme.radii.normal} ;
`