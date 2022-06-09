import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  margin-bottom: 12px;
`;

export const Label = styled.label`
  /* margin-bottom: 10px; */
  /* float: left; */
`;

export const InputName = styled.input`
  margin-left: 16px;
`;

export const ButtonAdd = styled.button`
  height: 40px;
  background-color: #b1d8be;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.8;
  }
`;

export const MainTitle = styled.h1`
  color: #b1d8be;
`;

export const Title = styled.h2`
  color: #b1d8be;
`;
