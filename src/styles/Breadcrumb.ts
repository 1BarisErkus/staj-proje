import Link from "next/link";
import styled from "styled-components";

export const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: transparent;
  padding: 20px 0;
`;

export const BreadcrumbItem = styled(Link)`
  font-size: 14px;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #ffc900;
  }
`;

export const BreadcrumbIcon = styled.span`
  font-size: 20px;
  margin: 0 5px;
  color: #ffc900;
`;
