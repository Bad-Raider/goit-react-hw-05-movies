import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    align-content: stretch;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: fit-content;
    margin: 5px
`;

export const Img = styled.img`
    width: 100%;
    border-radius: 10px
`


    