import Link from "next/link";
import styled from "styled-components";

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  opacity: 0.6;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 13px;
  opacity: 0.8;
`;
