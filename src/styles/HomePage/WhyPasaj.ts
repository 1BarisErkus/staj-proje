import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9fafc;
  padding: 80px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #1f1f1f;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 40px;
  max-width: 1100px;
  line-height: 1.5;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  flex-wrap: wrap;
`;

export const IconCard = styled.div`
  border-radius: 10px;
  padding: 20px;
  max-width: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 20px;
  background-color: #27356f;
  border-radius: 50%;
  padding: 30px;
  color: white;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #253342;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
`;
