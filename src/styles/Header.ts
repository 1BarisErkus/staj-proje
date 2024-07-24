import Link from "next/link";
import styled, { css } from "styled-components";

export const MainWrapper = styled.div`
  background-color: #fafbfd;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #eff2f5;
  border-radius: 10px;
`;

export const SearchIcon = styled.span`
  margin-right: 10px;
  font-size: 1.6rem;
  font-weight: 700;
  color: #5a7184;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: #253342;
  font-size: 1rem;
  width: 100%;

  &::placeholder {
    color: #253342;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const MenuItem = styled.div`
  font-size: 15px;
  color: #343a40;
  padding: 0.5rem 1rem;
  text-align: center;
  max-width: 140px;

  &:not(:last-child) {
    border-right: 1px solid #dee2e6;
  }
`;

export const CartBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ff6f61;
  color: white;
  border-radius: 50%;
  border: 4px solid white;
  font-size: 1rem;
  position: absolute;
  right: -15px;
`;

export const Button = styled.button<{
  primary?: boolean;
  withicon?: boolean;
  border?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  border: ${(props) => (props.border ? "1px solid #e9ecef" : "none")};
  border-radius: 6px;
  cursor: pointer;
  background-color: white;
  color: #343a40;
  width: 100%;
  height: 100%;
  gap: 8px;
  transition: all 0.3s ease;

  ${(props) =>
    props.primary &&
    css`
      background-color: #ffca00;
      color: #343a40;
    `}

  ${(props) =>
    props.withicon &&
    css`
      padding-left: 14px;
      padding-right: 14px;

      span {
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;
