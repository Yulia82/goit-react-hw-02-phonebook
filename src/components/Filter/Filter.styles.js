import styled from "@emotion/styled";

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;

  width: 200px;
  margin-bottom: 20px;

  font-weight: bold;
  font-size: 14px;
`;

export const FilterInput = styled.input`
  border-radius: 6px;
  height: 20px;

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    border-color: #ba8ae9;
  }
`;
