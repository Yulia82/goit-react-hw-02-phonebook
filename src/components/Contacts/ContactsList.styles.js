import styled from "@emotion/styled";

export const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

export const BtnDelete = styled.button`
  min-width: 70px;
  border-color: #ba8ae9;
  border-radius: 6px;

  &:hover,
  &:focus {
    background-color: #ba8ae9;
    color: #ffffff;
    cursor: pointer;
  }
`;
