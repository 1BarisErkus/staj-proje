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

export const MiddleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MiddleRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const LanguageSelector = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  a {
    margin: 0 0.5rem;
    color: #a7a7a7;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:first-child {
      color: #ffffff;
    }
  }
`;

export const SocialMedia = styled.div`
  text-align: center;

  a {
    margin: 0 0.5rem;
    color: #ffffff;
    font-size: 1.5rem;
  }
`;

export const SwiperWrapper = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid #ffffff37;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BottomLinks = styled.div`
  opacity: 0.5;
  font-size: 0.9rem;

  a {
    margin: 0 1rem;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0.5;
  font-size: 0.9rem;
`;
