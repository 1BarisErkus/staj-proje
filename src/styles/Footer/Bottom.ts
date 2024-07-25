import styled from "styled-components";

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
