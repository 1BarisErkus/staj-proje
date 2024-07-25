import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
`;

export const SlideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 12px;
  padding: 50px;
`;

export const BlurredImage = styled(Image)`
  object-fit: cover;
  filter: blur(16px);
`;
