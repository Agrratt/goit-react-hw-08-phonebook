import styled from '@emotion/styled';

export const Title = styled.h2`
  // margin: 100px auto;
  font-size: 40px;
  font-weight: 500;
  color: #b1d8be;
  text-align: center;
`;

export const Form = styled.form`
  margin: 0 auto;
  padding: 35px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  justify-content: center;
`;

export const Input = styled.input`
  width: 250px;
  height: 25px;
  color: inherit;
  font-weight: 700;
  background-color: transparent;
  padding: 0 10px 0 10px;
  padding: 0 10px 0 10px;
  font-size: 20px;
  border: 1px solid #8c8c8b;
  border-radius: 3px;
  font: inherit;
  font-size: inherit;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin-top: 15px;
  background-color: #b1d8be;
  border-radius: 3px;
  color: #686864;
  font-weight: 700;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.7;
  }
`;
