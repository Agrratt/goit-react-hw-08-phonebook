import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 50%;
  text-align: center;
  padding: 0;
`;

export const Text = styled.h3`
  color: rgba(255, 255, 255, 0.537);
  margin: 0;
  margin-right: 10px;
`;
export const Button = styled.button`
  padding: 10px;

  background-color: #b1d8be;
  border-radius: 3px;
  color: #686864;
  font-weight: 700;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.8;
  }
`;
