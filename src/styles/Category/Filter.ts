import styled from "styled-components";
import { Col } from "../GlobalVariables";

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const StyledLeftCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
