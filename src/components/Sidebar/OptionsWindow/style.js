import styled from "styled-components";

export const WindowContainer = styled.div`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  left: 200px;
  width: 200px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 16px;
  transition: right 0.3s ease-in-out;
`;

export const Options = styled.div`
  margin-bottom: 16px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const Icon = styled.span`
  margin-right: 8px;
`;
