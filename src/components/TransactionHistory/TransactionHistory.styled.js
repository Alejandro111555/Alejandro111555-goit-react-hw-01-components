import styled from "styled-components";

export const TableHead = styled.th`
    width: 200px;
    height: 30px;
    padding: 4px 0;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.fill} ;
    `


export const TableData = styled.td`
    height: 30px;
    padding: 4px 0;
    text-align: center;
    background-color: ${p => p.theme.colors.muted};
    border-radius: ${p => p.theme.radii.normal};
`