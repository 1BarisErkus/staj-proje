import Link from "next/link";
import styled from "styled-components";

export const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #f8f8f8;
  padding-top: 20px;
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
