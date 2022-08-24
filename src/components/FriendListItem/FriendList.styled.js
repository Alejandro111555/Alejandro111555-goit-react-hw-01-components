import styled from "styled-components";

export const StyledFriendList = styled.ul`
display: flex;
flex-direction: column;
`

export const FriendListItem = styled.li`
display: flex;
align-items: center;
gap: ${p => p.theme.space[16]};
padding: ${p => p.theme.space[4]};
border: ${p => p.theme.borders.normal};
border-radius: ${p => p.theme.radii.normal};
:not(:last-child)
{margin-bottom: ${p => p.theme.space[8]}};
`

export const StatusBar = styled.span`
width: 10px;
height: 10px;
border-radius: ${p => p.theme.radii.round};
background-color: ${p => p.status ? p.theme.colors.online : p.theme.colors.offline }
`