import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #27356f;
  color: #ffffff;
  padding-top: 4rem;
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ffffff37;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColTitle = styled.h4`
  margin-bottom: 1.5rem;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #ffc900;
  }
`;

export const ColLink = styled(Link)`
  display: block;
  color: #ffffff;
  margin-bottom: 1rem;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;

  &:hover {
    color: #ffc900;
  }
`;
