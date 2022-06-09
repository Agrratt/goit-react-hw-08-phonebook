import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin-top: 150px;
  text-align: center;
  color: #b1d8be;
  font-size: 70px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3e4242;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #888c8c;
  }
`;

export const Text = styled.p`
  margin: 100px auto;
  width: 25%;
  padding: 20px;
  text-align: center;
  font-weight: 700;
  background-color: #b1d8be;
  border-radius: 3px;
  color: black;
`;
