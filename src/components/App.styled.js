import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Link = styled(NavLink)`
  padding: 10px 16px;
  border-radius: 7px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: green;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: fit-content;
`;

export const Header = styled.header`
  border-bottom: 1px solid #6c6969;
    padding: 10px;
`;

export const Container = styled.section`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
`;