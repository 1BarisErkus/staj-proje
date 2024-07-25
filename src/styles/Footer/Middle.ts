import styled from "styled-components";

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
