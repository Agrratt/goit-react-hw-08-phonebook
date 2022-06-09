import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  width: 70px;
  padding: 0 15px;
  font-weight: 500;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.537);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(0.9);
  }
  &.active {
    color: #ffffff;
  }
`;
